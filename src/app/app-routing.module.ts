import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AppRoutes } from './helpers/routes';
import { ProductsDetailComponent } from './products-detail/products-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.HOME,
    pathMatch: 'full'
  },
  {
    path: AppRoutes.PRODUCTS_LIST,
    component: ProductsComponent
  },
  {
    path: AppRoutes.CART,
    component: CartComponent
  },
  {
    path: AppRoutes.PRODUCTS_DETAIL,
    component: ProductsDetailComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
