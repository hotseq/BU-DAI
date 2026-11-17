import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController
} from '@angular/common/http/testing';

import { ServiciosService } from './servicios.service';
import { environment } from '../../environments/environments';

describe('ServiciosService', () => {

  let service: ServiciosService;
  let httpMock: HttpTestingController;

  // Prepara el entorno antes de cada test
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServiciosService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(ServiciosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Comprueba que no queden peticiones HTTP pendientes
  afterEach(() => {
    httpMock.verify();
  });

  // TEST 1: Obtener todos los servicios
  it('debe obtener la lista de servicios', () => {

    const servicios = [
      {
        id: 1,
        titulo: 'Manicura',
        descripcion: 'Manicura semipermanente'
      }
    ];

    service.getServicios().subscribe(response => {
      expect(response).toEqual(servicios);
    });

    const req = httpMock.expectOne(
      `${environment.apiBase}/servicios`
    );

    expect(req.request.method).toBe('GET');

    req.flush(servicios);
  });

  // TEST 2: Obtener un servicio por ID
  it('debe obtener un servicio por su ID', () => {

    const servicio = {
      id: 1,
      titulo: 'Pedicura',
      descripcion: 'Pedicura completa'
    };

    service.getServicio(1).subscribe(response => {
      expect(response).toEqual(servicio);
    });

    const req = httpMock.expectOne(
      `${environment.apiBase}/servicios/1/`
    );

    expect(req.request.method).toBe('GET');

    req.flush(servicio);
  });

  // TEST 3: Comprobar errores HTTP en Angular
  it('debe gestionar un error 404', () => {

  service.getServicio(9999).subscribe({
    next: () => {
      fail('La petición debería devolver un error 404');
    },
    error: (error) => {
      expect(error.status).toBe(404);
    }
  });

  const req = httpMock.expectOne(
    `${environment.apiBase}/servicios/9999/`
  );

  expect(req.request.method).toBe('GET');

  req.flush(
    { detail: 'Not found.' },
    { status: 404, statusText: 'Not Found' }
  );

  });

  // TEST 4: Probar error del servidor (HTTP 500)
  it('debe gestionar un error 500 del servidor', () => {

  service.getServicios().subscribe({
    next: () => {
      fail('La petición debería devolver un error 500');
    },
    error: (error) => {
      expect(error.status).toBe(500);
    }
  });

  const req = httpMock.expectOne(
    `${environment.apiBase}/servicios`
  );

  expect(req.request.method).toBe('GET');

  req.flush(
    { detail: 'Internal Server Error' },
    { status: 500, statusText: 'Internal Server Error' }
  );

  });

});
