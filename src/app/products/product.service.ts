import { Injectable } from '@angular/core';
import { PRODUCTS } from './products-data';
import { Product } from './Product'; 
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ProductService {
    public product;
    public product$:Subject<any>;

    constructor() { 
        this.product = [];
        this.product$ = new Subject();
    }

    getProducts() {
        return Promise.resolve(PRODUCTS)
    }

    getProduct(id) {
        return this.getProducts()
                    .then(products => products.find(product => product.id === id))
    }

}