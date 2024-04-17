from rest_framework import serializers
from .models import *

class Send_ideaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Send_idea
        fields = ('name', 'phone', 'email', 'message')
