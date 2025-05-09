from django.http.response import JsonResponse
from django.shortcuts import render



# Create your views here.

def productos(request):
    return render(request,'productosjefe.html')

def clientes(request):
    return render(request,'clientesjefe.html')

