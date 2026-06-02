import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<any> {

  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const id = route.paramMap.get('id');

    return this.http.get<any>('/data/products.json').pipe(
      map((response) => {

        const product = response.categories
          .flatMap((c: any) => c.products)
          .find((p: any) => p.id == id);

        return product;

      })
    );

  }
}