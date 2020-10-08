import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './shop-module/products/products.component';
import { CartComponent } from './shop-module/cart/cart.component';
import { ProductsDetailComponent } from './shop-module/products-detail/products-details.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './sm-store/reducers/reducer';
import { ProductService } from './core/product.service';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ProductsDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ cart: reducer }),
    ToastModule
  ],
  providers: [ProductService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
