# BUDAI — Aplicación web para centro de estética

Aplicación web desarrollada para BUDAI, un centro de estética y belleza.

El proyecto consiste en una aplicación web que permite consultar los servicios del centro, explorar una galería de imágenes, conocer sus instalaciones y acceder a una plataforma externa para reservar citas.

Su desarrollo combina un backend en Python con Django REST Framework y un frontend en Angular con TypeScript, siguiendo una arquitectura basada en API REST.

## 1. Tecnologías utilizadas
*Backend*
- Python
- Django
- Django REST Framework
- SQLite (entorno de desarrollo)
  
*Frontend*
- Angular
- Typescript
- HTML5
- CSS3

## 2. Funcionalidades

- *Catálogo de servicios:* consulta de los tratamientos y servicios disponibles.
- *Información detallada:* páginas individuales con información sobre los servicios.
- *Galería de imágenes:* visualización de fotografías del centro y sus trabajos.
- *Información del establecimiento:* presentación del centro y sus instalaciones.
- *Contacto:* acceso a los canales de comunicación del negocio.
- *Reserva de citas:* enlace a una plataforma externa para gestionar las reservas.
- *API REST:* comunicación entre el frontend de Angular y el backend de Django.

## 3. Arquitectura 

El proyecto está dividido en dos partes principales:

**Frontend (Angular)**

Se encarga de la interfaz de usuario, la navegación y la presentación de los servicios.

**Backend (Django REST Framework)**

Gestiona los datos de la aplicación y proporciona los endpoints que consume Angular mediante peticiones HTTP.

La comunicación sigue este esquema:


<img width="908" height="705" alt="image" src="https://github.com/user-attachments/assets/d122c4d2-92e6-459e-91f5-b7589a6ab1cb" />

## 3.Estructura del proyecto 
│ 

├── budai/ # Configuración de Django       

├── inicio/ # Aplicación Django y API REST 

├── frontend/ # Aplicación Angular 

├── manage.py # Administración de Django 

├── requirements.txt # Dependencias de Python 

├── .gitignore # Archivos excluidos de Git 

└── README.md # Documentación del proyecto

## 4. Instalación y ejecución local

**Requisitos**

- Python
- Node.js y npm
- Git

### 1. Clonar el repositorio 

git clone https://github.com/hotseq/BU-DAI.git cd BU-DAI

### 2. Configurar el backend

Crear y activar un entorno virtual de Python.

En Windows (PowerShell):

python -m venv venv
.\venv\Scripts\Activate.ps1

Instalar las dependencias:

pip install -r requirements.txt

Crear un archivo .env en la raíz del proyecto con las variables necesarias:

DJANGO_SECRET_KEY=tu_clave_secreta
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

Generar una clave secreta propia para el entorno local.

Aplicar las migraciones:

python manage.py migrate

Iniciar Django:

python manage.py runserver

### 3. Configurar el frontend

Abrir otra terminal y acceder a la carpeta de Angular:

cd frontend
npm install
npm start

La aplicación estará disponible en:

http://localhost:4200

La API de Django estará disponible en:

http://127.0.0.1:8000/api/

Nota: el repositorio no incluye la base de datos local ni sus registros. Después de instalar el proyecto, será necesario incorporar los datos de los servicios para visualizar el catálogo completo.

### Estado del proyecto

**En desarrollo.**

La aplicación funciona en entorno local. Está pendiente su despliegue en un entorno de producción y la ampliación de las pruebas automatizadas.

### Autor

Proyecto desarrollado como aplicación web utilizando Python, Django REST Framework, Angular y TypeScript.

GitHub: hotseq


