// Defino rutas principales de la app, cada ruta carga un componente en <router-outlet>
import { Routes } from '@angular/router';
import { ServiciosListComponent } from './features/servicios-list/servicios-list.component';
import { ServicioDetailComponent } from './features/servicio-detail/servicio-detail.component';
import { HomeComponent } from './features/home/home.component';
import { SobreComponent } from './features/sobre/sobre.component';
import { GaleriaComponent } from './features/galeria/galeria.component';
import { ContactoComponent } from './features/contacto/contacto.component';


export const routes: Routes = [  // Dice que componentes mostrar segun su URL

  { path: 'servicios', component: ServiciosListComponent }, // Ruta de lista de servicios
  { path: 'servicios/:id', component: ServicioDetailComponent }, // Ruta hacia el id de cada servicio
  { path: '', component: HomeComponent }, // Ruta de home (inicio)
  { path: 'sobre', component: SobreComponent }, // Ruta de sobre nosotras
  { path: 'galeria', component: GaleriaComponent }, // Ruta a la galeria
  { path: 'contacto', component: ContactoComponent }, // Ruta hacia el formulario (proximamente)
  ];
