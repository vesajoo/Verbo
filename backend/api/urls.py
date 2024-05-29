from django.urls import path
from . import views

urlpatterns = [
    path('subverbos/', views.GetSubVerbos.as_view(), name="subverbo-list"),
    path('subverbos/create/', views.CreateSubVerboView.as_view(), name="subverbo-create"),
]
