from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, SubVerboSerializer, StorySerializer, CommentSerializer, StoryAndCommentsSerializer, ReadStorySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .models import Subverbo, Story, Comment

# Create your views here.
class CreateSubVerboView(generics.CreateAPIView):
    queryset = Subverbo.objects.all()
    serializer_class = SubVerboSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(owner=self.request.user)
        else:
            print(serializer.errors)

class GetSubVerbosView(generics.ListAPIView):
    queryset = Subverbo.objects.all()
    serializer_class = SubVerboSerializer
    permission_classes = [AllowAny]


class SubverboView(generics.ListAPIView):
    serializer_class = ReadStorySerializer
    permission_classes = [AllowAny]

    def get_queryset(self, *args, **kwargs):
        subverbo = self.kwargs.get('name')
        parent = Subverbo.objects.get(name=subverbo)
        queryset = parent.child_story.all()
        return queryset
    
class LoggedInUserView(generics.ListAPIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
        

class CreateStoryView(generics.CreateAPIView):
    queryset = Story.objects.all()
    serializer_class = StorySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(owner=self.request.user)
        else:
            print(serializer.errors)

class GetStoryView(generics.ListAPIView):
    queryset = Story.objects.all()
    serializer_class = ReadStorySerializer
    permission_classes = [AllowAny]

class GetStoryCommentsView(generics.ListAPIView):
    serializer_class = StoryAndCommentsSerializer
    permission_classes = [AllowAny]

    def get_queryset(self, *args, **kwargs):
        story = self.kwargs.get('slug')
        queryset = Story.objects.filter(story_url=story)
        return queryset
    

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CreateCommentView(generics.CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]
    queryset = Comment.objects.all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(owner=self.request.user)
        else:
            print(serializer.errors)