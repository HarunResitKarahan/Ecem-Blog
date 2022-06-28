from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from blogApp.models import *
from blogApp.serializers import *

from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password,check_password

print(Users.objects.all().values())

def index(request):
    return render (request, 'blogApp/homepage.html', {'title': 'Ecem Beyza Aydın BLOG'})

@csrf_exempt
def UserApi(request, id = 0):
    if request.method == 'POST':
        user_data = JSONParser().parse(request)
        if len(Users.objects.filter(userName = user_data['userName']).values()) > 0:
            return JsonResponse("Kullanıcı Sistemde Kayıtlı", safe = False)
        else:
            user_data['userPassword'] = make_password(user_data['userPassword'])
            # print(check_password(patient_data['patientPassword']))
            user_serializer = UsersSerializer(data = user_data)
            if user_serializer.is_valid():
                user_serializer.save()
                return JsonResponse("Basariyla Kayit Olundu", safe = False)
            return JsonResponse("Kayıt Olunamadı", safe = False)

@csrf_exempt
def UserGirisApi(request, id = 0):
    if request.method == 'POST':
        try:
            user_data = JSONParser().parse(request)
            print(user_data)
            user = Users.objects.filter(userName = user_data['userName']).values()
            print(user_data['userPassword'])
            print(user[0]['userPassword'])
            if check_password(user_data['userPassword'], user[0]['userPassword']):
                return JsonResponse("Giriş Başarılı", safe = False)

        except:
            return JsonResponse("Kullanıcı Adı veya Şifre Hatalı", safe = False)