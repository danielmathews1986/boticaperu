// services/product.service.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from '../models/product.model';
import { shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

    // getCategories() {
    //   return this.http.get<ProductResponse>(
    //     '/data/products.json'
    //   );
    // }

  private categories$ = this.http.get<ProductResponse>(
    '/data/products.json'
  ).pipe(
    tap(() => console.log('JSON DESCARGADO')),
    shareReplay(1)
  );
  
  getCategories() {
    return this.categories$;
  }

}