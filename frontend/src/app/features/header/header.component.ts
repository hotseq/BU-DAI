import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive], // Importamos los RouterLink aqui tambien para que el header no los interprete como texto plano
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {  // Componente del cabecero
  constructor(public router: Router) {}

  get isHome(): boolean {
    // Protege por si el router aún no se ha inicializado
    return this.router?.url === '/';
    }
}
