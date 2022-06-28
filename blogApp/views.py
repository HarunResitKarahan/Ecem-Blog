from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from blogApp.models import *
from blogApp.serializers import *

from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password,check_password


def index(request):
    return render (request, 'blogApp/homepage.html', {'title': 'Ecem Beyza Aydın BLOG'})

@csrf_exempt
def UserApi(request, id = 0):
    if request.method == 'POST':
        user_data = JSONParser().parse(request)
        user_data['userPassword'] = make_password(user_data['userPassword'])
        # print(check_password(patient_data['patientPassword']))
        user_serializer = UsersSerializer(data = user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Basariyla Kayit Olundu", safe = False)
        return JsonResponse("Kayıt Olunamadı", safe = False)