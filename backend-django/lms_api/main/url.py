from django.urls import path
from . import views

urlpatterns=[
    path('instructor/', views.InstructorList.as_view())

]
