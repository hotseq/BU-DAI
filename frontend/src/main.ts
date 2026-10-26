// Arranque principal de la app Angular
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Inicia la aplicacion con el componente raiz y la configuracion general
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err)); // Muestra errores si falla algo en el arranque

