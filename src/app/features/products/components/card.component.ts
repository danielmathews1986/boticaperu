import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
  
  @Component({
    selector: 'app-card',
    imports:[ RouterLink ],
    standalone: true,
    templateUrl: './card.component.html'
  })
  export class CardComponent {

    categorySlug = '';
  
    @Input({ required: true })

    product!: {
      id: number;
      name: string;
      description: string;
      image: string;
      price: number;
    };
  
  }