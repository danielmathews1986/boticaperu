import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ProductService } from '../../services/product.service';
// import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports:[RouterLink],
  templateUrl:'./product-list.component.html',
})
export class ProductListComponent {

  private route = inject(ActivatedRoute);
  //private breadcrumbService = inject(BreadcrumbService);
  private productService = inject(ProductService);

  categoryName = '';
  products: any[] = [];
  categorySlug = '';

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.categorySlug = params.get('category')?? '';
        this.loadProducts( this.categorySlug ?? '');
      });

      // this.route.paramMap.subscribe(params => {
      //   this.categorySlug =
      //     params.get('category') ?? '';
      //   this.loadProducts(
      //     this.categorySlug
      //   );
      
      // });
  }

  private loadProducts( categorySlug: string ): void {
    this.productService
      .getCategories()
      .subscribe(response => {
        const category = response.categories.find(c => this.toSlug(c.name) === categorySlug);
        if (category) {
          this.categoryName = category.name;
          this.products = category.products;
        }
      });

  }

  private toSlug( value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-');
  }

}