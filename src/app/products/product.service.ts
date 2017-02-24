import { Product } from './Product';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {

    constructor(private http: Http) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get('http://localhost:3000/api/products')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getProductsById(id : number) : Observable<Product[]> {
        var url = 'http://localhost:3000/api/products/' + id;
        console.log(url);
        
        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}