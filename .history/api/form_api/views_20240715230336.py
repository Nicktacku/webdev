from django.shortcuts import render
from rest_framework.response import Response
from .models import Note
from .serializers import FormSerializer

# Create your views here.

def save(request):
    data = request.data
    form = Form_Information.objects.create(
        body=data['body']
    )
    serializer = FormSerializer(form, many=False)
    return Response(serializer.data)