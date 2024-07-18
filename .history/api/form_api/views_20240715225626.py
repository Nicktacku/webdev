from django.shortcuts import render
from rest_framework.response import Response
from .models import Note
from .serializers import FormSerializer

# Create your views here.

def save(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
    )
    serializer = FormSerializer(note, many=False)
    return Response(serializer.data)