import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
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
  public sortOptions: SelectItem[];
  public sortOrder: number;
  public sortField: string;

  private subscription: Subscription;

  constructor(
    private productService: ProductService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.subscription = this.productService.getProducts().subscribe(response => {
      console.log(response)
      this.products = response;
    }, error => {
      console.error(error);
    });

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.primengConfig.ripple = true;
  }

  public onSortChange(event): void {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
