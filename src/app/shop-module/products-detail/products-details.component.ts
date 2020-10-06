import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ProductService } from '../../core/product.service';
import * as Cart from '../../sm-store/actions/actions';
import { Product } from '../../sm-store/models/product.model';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit, OnDestroy {

  public product: Product;

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store<any>) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params.id;

      if (id) {
        this.subscription = this.productService.getProduct(id).subscribe(response => {
          this.product = response;
        }, error => {
          console.error(error);
        });
      }
    }, error => {
      console.error(error);
    });
  }

  public addToCart(product): void {
    this.store.dispatch(new Cart.AddProduct(product));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
