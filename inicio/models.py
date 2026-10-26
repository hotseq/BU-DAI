from django.db import models
# Importa herramientas para crear modelos en Django

# Clase de servicios en budai
class Servicios(models.Model):
    titulo = models.CharField(max_length= 200) # Titulo cadena maxima de 200 caracteres
    descripcion = models.CharField()

    def __str__(self):
        return self.titulo + ' - ' + self.descripcion

