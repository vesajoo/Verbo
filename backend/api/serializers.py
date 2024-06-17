from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Subverbo, Story

class LoggedInUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class StorySerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='owner.username', read_only=True)
    subverbo = serializers.CharField(source='subverbo.name', read_only=True)
    class Meta:
        model = Story
        fields = ["id", "subverbo", "created_at", "title", "text", "owner"]
        extra_kwargs = {"owner": {"read_only": True}}


class SubVerboSerializer(serializers.ModelSerializer):
    child_story = StorySerializer(many=True, read_only=True)
    owner = serializers.CharField(source='owner.username', read_only=True)
    class Meta:
        model = Subverbo
        fields = ["id", "name", "created_at", "owner", "child_story"]
        extra_kwargs = {"owner": {"read_only": True}}

# class SubVerboDataSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Subverbo