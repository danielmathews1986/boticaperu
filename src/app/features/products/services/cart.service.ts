import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartCount = signal(0);

  add(quantity: number = 1): void {
    this.cartCount.update(
      count => count + quantity
    );
  }

}