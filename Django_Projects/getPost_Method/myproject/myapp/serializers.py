from rest_framework import serializers
from .models import Student,Users
import bcrypt

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields="__all__"


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=Users
        fields="__all__"
        extra_kwargs={
            "password":{
                'write_only':True
            }
        }

    def create(self,validated_data):
        password=validated_data['password']

        password_bytes=password.encode("utf-8")

        hash_password=bcrypt.hashpw(password_bytes,bcrypt.gensalt())

        user=Users.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            password=hash_password.decode('utf-8')
        )

        return user

class LoginSerializer(serializers.Serializer):
    
    username=serializers.CharField()
    password=serializers.CharField(
        write_only=True
        )

    def validate(self,data):
        username=data['username']
        password=data['password']

        try:
            user=Users.objects.get(username=username)

        except Users.DoesNotExist:
            raise serializers.ValidationError(
                "Invalid username Or password"
            )

        password_bytes=password.encode('utf-8')
        hashed_password=user.password.encode('utf-8')

        if not bcrypt.checkpw(password_bytes,hashed_password):
            raise serializers.ValidationError(
                            "Invalid username Or password"
                        )

        data["user"]=user

        return data