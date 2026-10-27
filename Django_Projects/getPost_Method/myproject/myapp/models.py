from django.db import models

# Create your models here.
class Student(models.Model):
    name=models.CharField(max_length=30)
    age=models.IntegerField()



class Users(models.Model):
    username=models.CharField(
        max_length=100
    )
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=300)
    
    

