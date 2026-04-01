import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },

  { 
    path: 'register',
    loadComponent: () =>
      import('./register/register.component')
        .then(m => m.RegisterComponent)
  },

  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },

  { path: 'produtos', component: ProductsComponent },

      {
        path: 'novo-produto',
        loadComponent: () =>
          import('./register-product/register-product.component')
            .then(m => m.RegisterProductComponent)
      },
      {
        path: 'produto/:id',
        loadComponent: () =>
          import('./edit-product/edit-product.component')
            .then(m => m.EditProductComponent)
      },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];