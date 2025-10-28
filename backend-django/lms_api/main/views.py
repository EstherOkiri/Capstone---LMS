from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import InstructorSerializer
from . import models

# Create your views here.

class InstructorList(APIView):
    def get(self,request):
        instructor=models.Instructor.objects.all()
        serializer=InstructorSerializer(instructor, many=True)
        return Response(serializer.data)
