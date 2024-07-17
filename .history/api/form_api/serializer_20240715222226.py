from rest_framework.serializers import ModelSerializer
from .models import Form_Information


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Form_Information
        fields = '__all__'