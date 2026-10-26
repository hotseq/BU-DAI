import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService, Servicio } from '../../core/servicios.service';

// Este componente muestra la informacion completa de cada servicio con su nombre y descripcion. Se comunica con servicios-list
@Component({
  selector: 'app-servicio-detail',
  imports: [CommonModule],
  templateUrl: './servicio-detail.component.html',
  styleUrls: ['./boton-volver.css','./servicio-detail.component.css']
})
export class ServicioDetailComponent implements OnInit {

  // El objeto almacenará la informacion del servicio cargado
  servicio : Servicio | null = null;
  // Variables de control de estado
  cargando = true;
  error : string | null = null;

  constructor(
    private route: ActivatedRoute, // Permite leer el parametro de la URL con el nombre del servicio
    private serviciosSvc: ServiciosService // Realiza una peticion a la API
  ) {}
  ngOnInit(): void {
    // Obtiene el nombre del servicio desde la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Si existe ese nombre, pide os datos a la API
    this.serviciosSvc.getServicio(id).subscribe({
      next: (data) => {
        console.log("Servicio cargado:", data);
        this.servicio = data; // y los muestra por pantalla
        this.cargando = false; // y apaga la funcion de cargando
      },
      error: () => { // Si no muestra mensaje de error
        this.error = 'No se pudo cargar el servicio';
        this.cargando = false;
      }
    });
  }
}

