from django.db.models import fields
from rest_framework import serializers

from blogApp.models import *

class UsersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields=('id','userName', 'userEMail', 'userPassword')