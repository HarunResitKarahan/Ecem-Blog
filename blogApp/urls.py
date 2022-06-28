from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('user', views.UserApi),
    path('user/giris', views.UserGirisApi),
]