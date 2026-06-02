import { Routes } from '@angular/router';
import { ProductResolver } from '../../seo/productResolver';
export default [
    {
      path: ':category',
      loadComponent: () =>
        import('../product-list/product-list.component')
          .then(m => m.ProductListComponent),
      resolve: {
        product: ProductResolver
      }
    },
    {
      path: ':category/:id',
      loadComponent: () =>
        import('../product-detail/product-detail.component')
          .then(m => m.ProductDetailComponent),
      resolve: {
        product: ProductResolver
      }
    }

] as Routes;