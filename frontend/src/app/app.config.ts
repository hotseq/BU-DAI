// Configura el router, la deteccion de cambios y el manejo global de errores de la aplicacion

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'
import { routes } from './app.routes';

// Objeto de configuracion que se usa al arrancar la aplicacion en app.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // Detecta errores globales en el navegador
    provideZoneChangeDetection({ eventCoalescing: true }), //optimiza la deteccion de cambios en Angular
    provideRouter(routes), // Conecta las rutas definidas en app.routes,ts
    provideHttpClient(), // Habilita HttpClient en toda la aplicacion para hacer peticiones a la API
  ]
};
