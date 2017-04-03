import { Product } from './Product';
import { CurrentParameters } from '../parameters/CurrentParameters';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { SERVER_NAME } from '../shared/SERVER_CONST';

@Injectable()
export class ProductService {

    constructor(private http: Http) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get(SERVER_NAME + 'products')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getProductsById(id: number): Observable<Product[]> {
        var url = SERVER_NAME + 'products/' + id;
        console.log(url);

        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getCurrentParameters(id: number): Observable<CurrentParameters> {
        var url = SERVER_NAME + 'parameters/' + id;
        console.log(url);

        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}