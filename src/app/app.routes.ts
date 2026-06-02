import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'farmacia',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/products/pages/routes/products.routes'),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'farmacia',
    pathMatch: 'full'
  }
];
