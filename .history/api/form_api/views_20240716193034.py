from django.shortcuts import render
from rest_framework.response import Response
from .models import Form_Information
from .serializers import FormSerializer
from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .serializers import FormSerializer

# Create your views here.

def save(request):
    data = request.data
    form = Form_Information.objects.create(
        name=data['name'],
        student_no=data['student_no'],
        home_address=data['home_address'],
        school_year=data['school_year'],
        age=data['age'],
        sex=data['sex'],
        civil_status=data['civil_status'],
        course_college=data['course_college'],
        blood_type=data['blood_type'],
        parent_name=data['parent_name'],
        landline=data['landline'],
        cellphone=data['cellphone'],
        has_medical_illness=data['has_medical_illness'],
        diseases=data['diseases'],
        food=data['food'],
        no_known_allergies=data['no_known_allergies'],
        medicines=data['medicines'],
        cigarette=data['cigarette'],
        alcohol=data['alcohol'],
    )
    serializer = FormSerializer(form, many=False)
    return Response(serializer.data)