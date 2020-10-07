import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { productNames, status } from '../helpers/products-database';
import { Product } from '../sm-store/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('assets/products.json').pipe(map((response: any) => response.data));
    }

    generatePrduct(): Product {
        const product: Product = {
            id: this.generateId(),
            name: this.generateName(),
            description: 'Product Description',
            price: this.generatePrice(),
            quantity: this.generateQuantity(),
            category: 'Product Category',
            inventoryStatus: this.generateStatus(),
            rating: this.generateRating()
        };

        product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-') + '.jpg';
        return product;
    }

    private generateId(): string {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    private generateName(): string {
        return productNames[Math.floor(Math.random() * Math.floor(30))];
    }

    private generatePrice(): number {
        return Math.floor(Math.random() * Math.floor(299) + 1);
    }

    private generateQuantity(): number {
        return Math.floor(Math.random() * Math.floor(75) + 1);
    }

    private generateStatus(): string {
        return status[Math.floor(Math.random() * Math.floor(3))];
    }

    private generateRating(): number {
        return Math.floor(Math.random() * Math.floor(5) + 1);
    }

}
