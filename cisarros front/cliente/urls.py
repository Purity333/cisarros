from django.contrib import admin
from django.urls import path, include
from cliente import views

urlpatterns = [
    path('login/',views.LoginMetodo),
    path('nosotros/',views.Nosotros),
    path('home/',views.Home),
    path('contacto/',views.Contacto),
    path('productos/',views.Productos),
    path('carrito/',views.Carrito),
    path('registro/',views.Registro),
    path('contraolvi/',views.ContraOlvi),
    path('contranueva/',views.ContraNueva),
    path('regisexito/',views.RegisExito),
    path('crearprod/',views.CrearProd),
    path('productoslogin/',views.ProductosLogin),
    
]
