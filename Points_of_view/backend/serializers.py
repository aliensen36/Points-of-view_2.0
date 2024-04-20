from rest_framework import serializers
from .models import *

class SendIdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Send_idea
        fields = ['id', 'name', 'phone', 'email', 'message', 'created', 'is_published']

class EnglishContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnglishContent
        fields = '__all__'
