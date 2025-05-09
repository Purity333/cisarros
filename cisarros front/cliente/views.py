from django.shortcuts import render

# Create your views here.


def LoginMetodo(request):
    return render(request, 'signin.html')

def Nosotros(request):
    return render(request, 'team.html')

def Home(request):
    return render(request, 'index.html')

def Contacto(request):
    return render(request, 'contact.html')

def Productos(request):
    return render(request, 'blog-three-col.html')

def Carrito(request):
    return render(request, 'carrito.html')

def Registro(request):
    return render(request, 'signup.html')

def ContraOlvi(request):
    return render(request, 'forgot-password.html')

def ContraNueva(request):
    return render(request, 'new-password.html')

def RegisExito(request):
    return render(request, 'registration-success.html')

def CrearProd(request):
    return render(request, 'crearprod.html')

def ProductosLogin(request):
    return render(request, 'productoslogin.html')


