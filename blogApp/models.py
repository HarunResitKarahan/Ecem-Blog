from django.db import models

# Create your models here.
class Users(models.Model):
    # workerID = models.AutoField(primary_key=True)
    userName = models.CharField(max_length=200, default='')
    name = models.CharField(max_length=200, default='')
    userEMail = models.CharField(max_length=200, default='')
    userPassword = models.CharField(max_length=200, default='')