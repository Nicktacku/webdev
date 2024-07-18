from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def save(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)