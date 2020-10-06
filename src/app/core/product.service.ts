import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from '../helpers/products-database';
import { Product } from '../sm-store/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor() { }

    public getProductsList(): Observable<Product[]> {
        const obs = of(PRODUCTS);
        return obs;
    }

    public getProduct(id: number): Observable<Product> {
        const obs = of(PRODUCTS.find(pro => pro.id === id));
        return obs;
    }

}
