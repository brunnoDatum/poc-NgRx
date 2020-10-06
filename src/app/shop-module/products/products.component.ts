import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/product.service';
import { Product } from 'src/app/sm-store/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: Product[] = [];

  private subscription: Subscription;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.subscription = this.productService.getProductsList().subscribe(response => {
      this.products = response;
    }, error => {
      console.error(error);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
