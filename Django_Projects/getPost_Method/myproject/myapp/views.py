from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Student
from .serializers import StudentSerializer,RegisterSerializer,LoginSerializer

# Create your views here.

@api_view(['GET','POST'])
def home(request):

    if request.method=='POST':
        serializer=StudentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        
        return Response({
            "Error":"data is not valid",
            
        })
    elif request.method=='GET':
        students=Student.objects.all()
        serializer=StudentSerializer(students,many=True)

        return Response({"data":serializer.data},status=200)

@api_view(['GET','PUT','DELETE'])    
def updatation(request,id):
  try:
      student=Student.objects.get(id=id)

  except Student.DoesNotExist:
      return Response(
          {"message":"Student Not Found"}
      ,status=404)

  if request.method=='GET':

      serializer=StudentSerializer(student)

      return Response(serializer.data)

  elif request.method=='PUT':
      serializer=StudentSerializer(student,data=request.data)

      if serializer.is_valid():
          serializer.save()
          return Response({"message":"Update Successfully","data":serializer.data},status=200)
      return Response({"message":"Update Falied","data":serializer.errors},status=400)
  
  elif request.method=='DELETE':
      student.delete()

      return Response({"message":"Delete Successfully"})


@api_view(['POST'])
def register(request):
    serializer=RegisterSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({
            "message":"Registration Successful"
        },status=201)

    return Response({
       "message": serializer.errors
    },status=400)


@api_view(['POST'])
def login(request):
    serializer=LoginSerializer(data=request.data)

    if serializer.is_valid():
        user=serializer.validated_data['user']
        return Response({
            "message":"Login Successful",
            "user":user.id,
            "username":user.username,
            "email":user.email
        },status=200)

    return Response({
        "error":serializer.errors
    },status=401)