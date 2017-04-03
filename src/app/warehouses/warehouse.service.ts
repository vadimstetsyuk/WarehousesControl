import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
}