import { Component, OnInit } from '@angular/core'; // Importa clases para crear y controlar componentes
import { CommonModule } from '@angular/common'; // Aporta las directivas como *ngIf y *ngFor
import { RouterModule } from '@angular/router'; // Usa enlaces de rutas en mi HTMl
// Importa el servicio que obtiene los datos desde el backend y la interfaz del modelo
import { ServiciosService, Servicio } from '../../core/servicios.service';

//Metadatos que usa Angular para saber como renderizar el componente servicios
@Component({
  selector: 'app-servicios-list',
  standalone: true, // Indica que el componente es independiente y no se declara
  imports: [CommonModule, RouterModule], // Dependencias necesarias del componente
  templateUrl: './servicios-list.component.html',
  styleUrls: ['./servicios-list.component.css','./boton-mas-servicios.css']
})
export class ServiciosListComponent implements OnInit {
  servicios: any[] = [  // Lista que muestra junto con indice de imagenes las rutas a cada servicio
    { imagen: 'assets/1.jpg', link: '/servicios/Lifting de pestañas y tinte' },
    { imagen: 'assets/2.jpg', link: '/servicios/Maderoterapia' },
    { imagen: 'assets/3.jpg', link: '/servicios/Depilación láser' },
    { imagen: 'assets/4.jpg', link: '/servicios/Rayos UVA' },
    { imagen: 'assets/5.jpg', link: '/servicios/Cavitación' },
    { imagen: 'assets/6.jpg', link: '/servicios/Tratamiento facial carbón activo' },
    { imagen: 'assets/7.jpg', link: '/servicios/Pedicura' },
    { imagen: 'assets/8.jpg', link: '/servicios/Pedicura + Esmaltado Normal' },
    { imagen: 'assets/9.jpg', link: '/servicios/Esculpir Uña de Pie' },
    { imagen: 'assets/10.jpg', link: '/servicios/Limar y pintar pies Semipermanente' },
    { imagen: 'assets/11.jpg', link: '/servicios/Manicura' },
    { imagen: 'assets/12.jpg', link: '/servicios/Uñas Acrílicas' },
    { imagen: 'assets/13.jpg', link: '/servicios/Relleno de acrílico + Semipermanente' },
    { imagen: 'assets/14.jpg', link: '/servicios/Nail Art' },
    { imagen: 'assets/15.jpg', link: '/servicios/Soft Gel' },
    { imagen: 'assets/16.jpg', link: '/servicios/Tratamientos faciales' },
    { imagen: 'assets/17.jpg', link: '/servicios/Presoterapia' },
      ];
  cargando = true; // Muestra estado de carga de la vista
  error: string | null = null; // Si falla la llamada lanza error

  // Lanza la carga inicial de la vista
  constructor(private serviciosSvc: ServiciosService) {}

  ngOnInit(): void {
    // Hac una peticion a la API de Django REST para sacar los datos de la lista de servicios
    // 'next' recibe los datos y apaga el 'cargando', 'error' avisa de este y apaga el 'cargando'
    this.serviciosSvc.getServicios().subscribe({
      next: (data) => { this.servicios = data; this.cargando = false; },
      error: () => { this.error = 'No se pudo cargar'; this.cargando = false; }
    });
  }
}

