import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  max_fotos = 44 // Establece un tope de las fotos que existen en el array. Si añades mas en el futuro cambia el valor
   ids = Array.from({ length: this.max_fotos }, (_, i) => i + 1); // Array dinamico que recorre numeros del 1 al max_fotos
}

