from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, SubVerboSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Subverbo

# Create your views here.
class CreateSubVerboView(generics.CreateAPIView):
    queryset = Subverbo.objects.all()
    serializer_class = SubVerboSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(owner=self.request.user)
        else:
            print(serializer.errors)

class GetSubVerbos(generics.ListAPIView):
    queryset = Subverbo.objects.all()
    serializer_class = SubVerboSerializer
    permission_classes = [AllowAny]

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]