from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('profil', views.profile),
    path('user', views.UserApi),
    path('user/giris', views.UserGirisApi),
    path('user/get', views.UserGetApi),
]