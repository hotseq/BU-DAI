# Cofniguracion principal de la aplicacion de Django
from django.apps import AppConfig

# Clase que define los ajustes basicos de la app
class InicioConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'inicio'    # Nombre de la aplicacion y punto de partida dentro del proyecto
