from django.contrib import admin
from django.urls import path,include # Conecta rutas locales con globales


#Aqui puedes ver todas las urls que el usuario puede visitar
urlpatterns = [
    path('admin/', admin.site.urls), # Admin de Django
    path('api/',include('inicio.api_urls')) # Apunta a lo que defina en api_urls
]
