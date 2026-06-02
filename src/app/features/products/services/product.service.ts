// services/product.service.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  getCategories() {
    return this.http.get<ProductResponse>(
      '/data/products.json'
    );
  }

}