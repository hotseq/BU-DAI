# Importamos el modelo y los frameworks de Django
from .models import Servicios
from rest_framework import viewsets
from .serializers import ServiciosSerializer

# Crea una vista tipo API que solo admite lectura en metodo GET. Tambien muestra todos los servicios y los convierte a JSON
class ServiciosViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Servicios.objects.all() # Mostramos todos los registros
    serializer_class = ServiciosSerializer # La clase que vamos a traducir a JSON



