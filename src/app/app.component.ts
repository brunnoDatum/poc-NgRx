import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'poc-NgRx';
  public cart: any[];

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.select('cart').subscribe((state => this.cart = state));
  }

}
