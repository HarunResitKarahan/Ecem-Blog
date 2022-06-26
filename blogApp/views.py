from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render (request, 'blogApp/homepage.html', {'title': 'Ecem Beyza Aydın BLOG'})