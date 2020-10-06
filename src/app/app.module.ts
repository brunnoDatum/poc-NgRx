import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './shop-module/products/products.component';
import { CartComponent } from './shop-module/cart/cart.component';
import { ProductsDetailComponent } from './shop-module/products-detail/products-details.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './sm-store/reducers/reducer';
import { ProductService } from './core/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ProductsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cart: reducer })
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
