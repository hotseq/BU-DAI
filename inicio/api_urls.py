# Importamos el routing de REST Framework
from rest_framework.routers import DefaultRouter
from .views import ServiciosViewSet

# Creamos el router que genera las URLs para el ViewSet
router = DefaultRouter()
router.register(r'servicios',ServiciosViewSet)
# Define las rutas que usaremos en la API
urlpatterns = router.urls