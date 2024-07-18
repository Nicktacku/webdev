from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Form_Information(models.model):
    name= models.CharField(max_length=255)

