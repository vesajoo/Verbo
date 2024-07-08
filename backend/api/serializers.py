from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Subverbo, Story, Comment

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
    
class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='owner.username', read_only=True)
    class Meta:
        model = Comment
        fields = ["id", "story", "created_at", "text", "owner", "comment_url", "parent_comment", "replies"]
        extra_kwargs = {"owner": {"read_only": True}}

    def get_fields(self):
        fields = super(CommentSerializer, self).get_fields()
        fields["replies"] = CommentSerializer(many=True, read_only=True)
        return fields
    
class StorySerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='owner.username', read_only=True)
    class Meta:
        model = Story
        fields = ["id", "subverbo", "created_at", "title", "text", "owner", "story_url"]
        extra_kwargs = {"owner": {"read_only": True}}

class ReadStorySerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='owner.username', read_only=True)
    subverbo = serializers.CharField(source='subverbo.name', read_only=True)
    class Meta:
        model = Story
        fields = ["id", "subverbo", "created_at", "title", "text", "owner", "story_url"]
        extra_kwargs = {"owner": {"read_only": True}}


class SubVerboSerializer(serializers.ModelSerializer):
    child_story = StorySerializer(many=True, read_only=True)
    owner = serializers.CharField(source='owner.username', read_only=True)
    class Meta:
        model = Subverbo
        fields = ["id", "name", "created_at", "owner", "child_story"]
        extra_kwargs = {"owner": {"read_only": True}}

class ReadSubVerboSerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='owner.username', read_only=True)
    class Meta:
        model = Subverbo
        fields = ["id", "name", "created_at", "owner"]
        extra_kwargs = {"owner": {"read_only": True}}

class StoryAndCommentsSerializer(serializers.ModelSerializer):
    owner = serializers.CharField(source='owner.username', read_only=True)
    subverbo = serializers.CharField(source='subverbo.name', read_only=True)
    child_comment = CommentSerializer(many=True, read_only=True)
    class Meta:
        model = Story
        fields = ["id", "subverbo", "created_at", "title", "text", "owner", "story_url", "child_comment"]
        extra_kwargs = {"owner": {"read_only": True}}

class ProfileCommentsSerializer(serializers.ModelSerializer):
    story__title = serializers.CharField(source='story.title', read_only=True)
    story__story_url = serializers.CharField(source='story.story_url', read_only=True)
    story__subverbo = serializers.CharField(source='story.subverbo.name', read_only=True)
    owner = serializers.CharField(source='owner.username', read_only=True)
    class Meta:
        model = Comment
        fields = ["id", "story", "created_at", "text", "owner", "comment_url", "parent_comment", "story__title", "story__story_url", "story__subverbo"]
        extra_kwargs = {"owner": {"read_only": True}}


class ReadUserSerializer(serializers.ModelSerializer):
    stories = ReadStorySerializer(many=True, read_only=True)
    comments = ProfileCommentsSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ["id", "username", "stories", "comments"]


