from http.client import responses

from django.test import TestCase
from .models import Servicios
from rest_framework.test import APITestCase

# TESTS DEL MODELO
class ServiciosModelTest(TestCase):
    # Creamos un servicio
    def test_crear_servicio(self):
        # Django usa el ORM para crear un registro en la BBDD de pruebas
        servicio = Servicios.objects.create(
            titulo = "Limpieza facial",
            descripcion = "Tratamiento de limpieza facial"
        )
        # Comprobamos los atributos, como que existe un registro en el modelo Servicios o que coincida el nombre y descp.
        self.assertEqual(servicio.titulo, "Limpieza facial")
        self.assertEqual(servicio.descripcion, "Tratamiento de limpieza facial")
        self.assertEqual(Servicios.objects.count(), 1)

    def test_str_servicios(self):
        # Comprueba el método str de nuestro modelo servicios
        servicio = Servicios.objects.create(
            titulo = "Manicura",
            descripcion = "Manicura semipermanente"
        )
        # Llama al método _str_
        resultado = str(servicio)
        self.assertEqual(resultado, "Manicura - Manicura semipermanente")



# TEST DE API REST
class ServiciosAPITest(APITestCase):

    def test_listar_servicios(self):
        Servicios.objects.create(
            titulo="Manicura",
            descripcion="Manicura semipermanente"
        )

    def test_obtener_servicio_por_id(self):
        servicio = Servicios.objects.create(
            titulo = "Pedicura",
            descripcion = "Tratamiento de pedicura"
        )
        response = self.client.get(f'/api/servicios/{servicio.id}/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['id'],servicio.id)
        self.assertEqual(response.data['titulo'], "Pedicura")
        self.assertEqual(
            response.data['descripcion'],"Tratamiento de pedicura"
        )

    def test_servicio_no_encontrado(self):
        # Simulamos una peticion que no exite para provocar un error 404
        response = self.client.get('/api/servicios/9999/')
        # Django responde el error
        self.assertEqual(response.status_code,404)

    def test_no_permite_crear_servicio(self):
        datos = {
            "titulo" : "Masaje",
            "descripcion" : "Masaje relajante"
        }

        response = self.client.post('/api/servicios/',datos) # Simula una peticion HTTP para crear un servicio
        self.assertEqual(response.status_code,405) # Comprueba si Django la rechaza
        self.assertEqual(Servicios.objects.count(),0) # Verifica que no se ha quedado ningun refistro


