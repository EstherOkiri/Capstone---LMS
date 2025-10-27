from rest_framework import serializers
from . import models

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Instructor
        fields=['name','email','password','qualification','mobile']