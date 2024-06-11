from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator
from sqids import Sqids

sqids = Sqids(min_length=8)

# Create your models here.
# alphanumeric = RegexValidator(r'^[0-9a-zA-Z]*$', 'Sallitut merkit: a-z, 0-9')

class Subverbo(models.Model):
    name = models.CharField(max_length=15, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="subverbos")
    # moderators = models.ManyToManyField(User)

class Story(models.Model):
    # id = models.AutoField(primary_key=True)
    subverbo = models.ForeignKey(Subverbo, on_delete=models.CASCADE, related_name="child_story")
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=50)
    text = models.CharField(max_length=500)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="stories")

    # def url(instance):
    #     url = sqids.encode([instance.id])
    #     return url