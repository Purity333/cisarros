from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns =[
   path('productos/',views.productos),
   path('clientes/',views.clientes),
   path('',views.clientes),
]
