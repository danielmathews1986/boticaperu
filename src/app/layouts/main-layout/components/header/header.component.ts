import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../../../../features/products/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports:[ NavbarComponent, RouterLink ],
    templateUrl:
      './header.component.html',
    styleUrl: './header.component.scss',
  })
  export class HeaderComponent {
    cartService = inject(CartService);
    image = '/products/buy.svg';
    search = '/products/Icon.svg';
  }