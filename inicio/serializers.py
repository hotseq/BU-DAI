# Importamos el framework y nuestras clases para pasarlas a formato JSON
from rest_framework import serializers
from .models import Servicios


class ServiciosSerializer(serializers.ModelSerializer): # Esta clase traduce mi modelo a JSON
    class Meta:
        model = Servicios # Modelo que se va a serializar
        fields = '__all__' # Esto le dice al serializer que incluya todos los campos de la clase