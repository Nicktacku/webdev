from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Form_Information(models.Model):
    name = models.CharField(max_length=255)
    student_no = models.CharField(max_length=20)
    home_address = models.CharField(max_length=255)
    school_year = models.CharField(max_length=20)
    age = models.CharField(max_length=20)
    sex = models.CharField(max_length=20)
    civil_status = models.CharField(max_length=20)
    course_college = models.CharField(default="", max_length=255)
    blood_type = models.CharField(max_length=20)
    email_address = models.CharField(max_length=255)
    parent_name = models.CharField(max_length=255)
    landline = models.CharField(max_length=20)
    cellphone = models.CharField(max_length=20)
    has_medical_illness = models.CharField(max_length=255)
    diseases = models.CharField(max_length=255)
    food = models.CharField(max_length=255)
    no_known_allergies= models.CharField(max_length=255)
    medicines = models.CharField(max_length=255)
    cigarette = models.CharField(max_length=255)
    alcohol = models.CharField(max_length=255)

    def __str__(self):
        return self.name