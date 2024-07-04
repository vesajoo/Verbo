from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator
from django_sqids import SqidsField

# Create your models here.
# alphanumeric = RegexValidator(r'^[0-9a-zA-Z]*$', 'Sallitut merkit: a-z, 0-9')

class Subverbo(models.Model):
    name = models.CharField(max_length=15, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="subverbos")
    # moderators = models.ManyToManyField(User)

class Story(models.Model):
    subverbo = models.ForeignKey(Subverbo, on_delete=models.CASCADE, related_name="child_story")
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    text = models.CharField(max_length=2000)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="stories")
    story_url = SqidsField(real_field_name="id", min_length=6)

class Comment(models.Model):
    story = models.ForeignKey(Story, on_delete=models.CASCADE, related_name="child_comment")
    created_at = models.DateTimeField(auto_now_add=True)
    text = models.CharField(max_length=1500)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comments")
    comment_url = SqidsField(real_field_name="id", min_length=10)
    parent_comment = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name="replies")

    