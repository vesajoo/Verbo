from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Subverbo, Story

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class SubVerboSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subverbo
        fields = ["id", "name", "created_at", "owner"]
        extra_kwargs = {"owner": {"read_only": True}}

class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = ["id", "subverbo", "created_at", "title", "text", "owner"]
        extra_kwargs = {"owner": {"read_only": True}}
    