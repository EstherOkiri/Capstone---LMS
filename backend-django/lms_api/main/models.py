from django.db import models

# Create your models here.
#instructor model
class Instructor(models.Model):
    name= models.CharField(max_length=100)
    email= models.CharField(max_length=100)
    password= models.CharField(max_length=100)
    qualification=models.CharField(max_length=200)
    mobile=models.CharField(max_length=20)

#course category model
class CourseCategory(models.Model):
    category_title=models.CharField(max_length=200)
    category_description=models.TextField()

    class Meta:
        verbose_name_plural= "Course Categories"

#Course Model

class Course(models.Model):
    category=models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    instructor=models.ForeignKey(Instructor, on_delete=models.CASCADE)
    title=models.CharField(max_length=200)
    description=models.TextField()

#Student Model
class Student(models.Model):
    name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    mobile=models.CharField(max_length=20)
    address=models.TextField()