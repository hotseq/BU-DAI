import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';




@Component({
  selector: 'app-root', // Etiqueta base de la app usada en index.html
  standalone : true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.html', // Estructura HTML general
  styleUrl: './app.css', // Estructura CSS general
})
export class App {
 // Define la estructura general de la web y carga el router-outlet
}
