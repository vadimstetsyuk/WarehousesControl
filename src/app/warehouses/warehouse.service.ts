import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    Headers,
    RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Warehouse } from './Warehouse';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { SERVER_NAME } from '../shared/SERVER_CONST';

@Injectable()
export class WarehouseService {

    constructor(private http: Http) {
    }

    getWarehouses(): Observable<Warehouse[]> {
        return this.http.get(SERVER_NAME + 'warehouses')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getWarehouseById(id): Observable<Warehouse> {
        return this.http.get(SERVER_NAME + 'warehouses/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    addWarehouse(_warehouse: Warehouse): Observable<Warehouse> {
        let body = JSON.stringify(_warehouse);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(SERVER_NAME + 'warehouses', body, options)
            .map(res => <Warehouse>res.json())
            .catch(this.handleError);
    }

    editWarehouse(_newWarehouse: Warehouse): Observable<Warehouse> {
        let body = JSON.stringify(_newWarehouse);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(SERVER_NAME + 'warehouses', body, options)
            .map(res => <Warehouse>res.json())
            .catch(this.handleError);
    }

    deleteWarehouse(warehouse: Warehouse): Observable<Warehouse> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.delete(SERVER_NAME + 'warehouses/' + warehouse.id, options)
            .map(res => <Warehouse>res.json())
            .catch(this.handleError);
    }

    private handleError(err: any): Observable<string> {
        let message: string;
        if (err.message) {
            message = err.message;
        } else {
            message = (err.status) ?
                `${err.status} : ${err.statusText}` :
                'Server connection error';
        }

        console.error(message);
        return Observable.throw(message);
    }
}