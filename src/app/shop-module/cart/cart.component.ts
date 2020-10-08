import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import * as Cart from '../../sm-store/actions/actions';
import { Product } from '../../sm-store/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart: Observable<any[]>;

  private selectedProduct: Product;

  constructor(
    private messageService: MessageService,
    private store: Store<any>) {
    this.cart = this.store.select('cart');
  }

  ngOnInit(): void {
  }

  private removeFromCart(product: Product): void {
    this.store.dispatch(new Cart.RemoveProduct(product));
  }

  public showConfirm(product: Product): void {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
    this.selectedProduct = product;
  }

  public onConfirm(): void {
    this.removeFromCart(this.selectedProduct);
    this.messageService.clear('c');
    this.messageService.add({ severity: 'success', summary: 'Product Removed', detail: 'Product was successfully removed from cart!' });
  }

  public onReject(): void {
    this.messageService.clear('c');
    this.selectedProduct = null;
  }

}
