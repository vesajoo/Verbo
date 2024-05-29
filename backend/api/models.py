from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Subverbo(models.Model):
    name = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="subverbos")
    # moderators = models.ManyToManyField(User)