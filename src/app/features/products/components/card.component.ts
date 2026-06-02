import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
  
  @Component({
    selector: 'app-card',
    imports:[ RouterLink ],
    standalone: true,
    templateUrl: './card.component.html'
  })
  export class CardComponent {

    private cartService =inject(CartService);

    categorySlug = '';
  
    @Input({ required: true })

    product!: {
      id: number;
      name: string;
      description: string;
      image: string;
      price: number;
    };
  
    addToCart(): void {
      this.cartService.add(1);
    }
  }