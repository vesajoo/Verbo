from django.urls import path
from . import views

urlpatterns = [
    path('subverbos/', views.GetSubVerbosView.as_view(), name="subverbo-list"),
    path('subverbos/create/', views.CreateSubVerboView.as_view(), name="subverbo-create"),
    path('subverbos/story/create/', views.CreateStoryView.as_view(), name="story-create"),
    path('subverbos/story/comment/', views.CreateCommentView.as_view(), name="comment-create"),
    path('subverbos/story/<slug:slug>/', views.GetStoryCommentsView.as_view(), name="comment-list"),
    path('subverbos/all/', views.GetStoryView.as_view(), name="story-all"),
    path('subverbos/<str:name>/', views.SubverboView.as_view(), name="subverbo-view"),
    path('user/<str:user>/', views.UserView.as_view(), name="user-view"),
]
