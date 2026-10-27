from django.urls import path
from . import views


urlpatterns = [
    path("getdata/",views.home),
    path("updatedata/<int:id>",views.updatation),
    path("register/",views.register),
    path("login/",views.login)
]
