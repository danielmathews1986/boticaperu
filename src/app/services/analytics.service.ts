import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private platformId = inject(PLATFORM_ID);

  viewItem(product: any): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    gtag('event', 'view_item', {
      currency: 'PEN',
      value: product.price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
        }
      ]
    });

  }

}