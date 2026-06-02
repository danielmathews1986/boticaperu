import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-nabvar',
  standalone: true,
  imports: [RouterLink],
  templateUrl:
    './navbar.component.html',
})
export class NavbarComponent {

  menuItems: MenuItem[] = [
    {
      label: 'Dermocosmética',
      route: '/dermocosmetica'
    },
    {
      label: 'Farmacia',
      route: '/farmacia'
    },
    {
      label: 'Bienestar',
      route: '/bienestar'
    },
    {
      label: 'Infantil',
      route: '/infantil'
    },
    {
      label: 'Fotoprotección',
      route: '/fotoproteccion'
    },
    {
      label: 'Inkaclub',
      route: '/inkaclub'
    },
    {
      label: 'Tienda 24 hrs.',
      route: '/tienda-24-hrs'
    },
    {
      label: 'Catalogo',
      route: '/catalogo'
    }
  ]
}