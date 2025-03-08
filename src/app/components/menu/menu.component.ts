import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: false
})
export class MenuComponent {

    isMenuOpen = false;

    // Función para alternar el estado del menú en móvil
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
}
