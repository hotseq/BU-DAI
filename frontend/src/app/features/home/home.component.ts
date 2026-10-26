import { Component,OnInit,AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home', // Etiqueta del HTML Padre app.html
  standalone : true, // Indica que el componente es independiente y no se declara
  imports: [RouterModule,CommonModule], // Dependencias necesarias del componente
  templateUrl: './home.component.html', // HTML asociado
  styleUrl: './home.component.css' // Estilo CSS asociado
})
export class HomeComponent implements AfterViewInit {

  // Clases estandar de Angular
  titulo = 'Tu mejor sonrisa empieza aquí';
  subtitulo = 'Tratamientos personalizados con resultados reales.';
  ctaPrincipal = 'https://www.treatwell.es/establecimiento/budai-nails-esthetic/';
  ctaSecundario = '/contacto';


  // Array de reseñas
  resenas = [
    { nombre: 'Patricia Gómez', texto: 'No puedo estar más feliz con mi manicura, son las mejores. Un ambiente muy agradable y son muy profesionales.' },
    { nombre: 'Marina López',   texto: 'La atención al cliente es impecable y el estudio es precioso, con muchísimo gusto. ¡Gran relación calidad-precio!' },
    { nombre: 'Laura Martínez',  texto: 'Trabajo impecable y trato cercano. Me hice las extensiones de pestañas y quedé muy contenta.' },
    { nombre: 'Lucía Molina',  texto: 'Me hice en BU-DAI las uñas soft gel con Sandra y diseño de cejas con Agata, no puedo estar más contenta con ellas y con sus resultados, no solo la calidad-precio es bueno sino que el trato es genial y te sientes como en casa. He encontrado mi centro de confianza, ya no las suelto' },
    { nombre: 'Beatriz Caballero',  texto: 'He ido a hacerme las uñas acrílicas y no van a ser las últimas que me haga en este sitio. Dejan las uñas de escándalo, y tanto Agata como Maite son un encanto. Sin duda alguna, repetiré más veces!!' },
    { nombre: 'Alba Navarro',  texto: 'Muy contenta con el servicio.Hace poco me hice un tratamiento facial, una limpieza con láser y salí muy contenta, además, Maite es maravillosa.' },
    { nombre: 'Eva Ferradas',  texto: 'Las mejores uñas del barrio, desde el primer día que fui ya no he vuelto a otro.. Mil facilidades de reserva (por Treatwell, por teléfono, por WhatsApp...) y te toque da igual si te toca Ágata, Mayte o Sandra. Las tres son increíbles y lo harán con cariño y profesionalidad.' },
    { nombre: 'Cynthia Moguer',  texto: 'Me encanta como me dejan las uñas.Ya es la tercera vez que voy y siempre salgo muy contenta !! Sin duda es mi sitio de confianza para mis uñas!!Gracias' },
    { nombre: 'Debbie B',  texto: 'Llevo haciéndome la maderoterapia aquí hace ya 1 mes y estoy encantada! Muy efectiva, se nota bastante los cambios, aparte destacar la amabilidad y el cariño con el que me tratan' },

  ];

  // Funciones implementadas en el widget de reseñas
  pausar() {
  const wrapper = document.querySelector('.carrusel-wrapper') as HTMLElement;
  if (wrapper) wrapper.style.animationPlayState = 'paused';
  }

  reanudar() {
    const wrapper = document.querySelector('.carrusel-wrapper') as HTMLElement;
    if (wrapper) wrapper.style.animationPlayState = 'running';
  }

  avanzar() {
    const wrapper = document.querySelector('.carrusel-wrapper') as HTMLElement;
    if (wrapper) {
      wrapper.scrollBy({ left: 320, behavior: 'smooth' });
    }
  }

  retroceder() {
    const wrapper = document.querySelector('.carrusel-wrapper') as HTMLElement;
    if (wrapper) {
      wrapper.scrollBy({ left: -320, behavior: 'smooth' });
    }
  }

  ngAfterViewInit(): void {
    // Inicializa el el carrusel tras cargar la vista
  }
}
