import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz que define la estructura de los objetos y atributos de la clase
export interface Servicio {
  id : number;
  titulo : string;
  descripcion : string;
  }

@Injectable({ providedIn: 'root' })
export class ServiciosService {

  private baseUrl =  'http://127.0.0.1:8000/api/servicios'  // baseURl apunta al endpoint de Django REST

  constructor(private http: HttpClient) {}
  //Obtiene los servicios desde la API a través del endpoint principal
  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.baseUrl)
    }
  //Devuelve la informacion de servicios con su id respectivo
  getServicio(id: number) {
    return this.http.get<Servicio>(`${this.baseUrl}/${id}/`);
  }
}

