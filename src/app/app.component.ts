import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './sm-store/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'poc-NgRx';
  public cart: Observable<Product[]>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.cart = this.store.select('cart');
  }

}
