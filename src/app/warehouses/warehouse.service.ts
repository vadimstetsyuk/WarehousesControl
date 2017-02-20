import { Injectable } from '@angular/core';
import { WAREHOUSES } from './warehouse-data';
import { Warehouse } from './Warehouse'; 
import { Observable, Subject } from 'rxjs';

@Injectable()
export class WarehouseService {
    public warehouse;
    public warehouse$:Subject<any>;

    constructor() { 
        this.warehouse = [];
        this.warehouse$ = new Subject();
    }
    
    // Returns an observable for the cart
    subcribeCart() {
        return Promise.resolve(this.warehouse$)
    }

    // Returns an array of objects of the items in the cart
    getCart() {
        return Promise.resolve(this.warehouse);
    }

    getWarehouses() {
        return Promise.resolve(WAREHOUSES)
    }

    getWarehouse(id) {
        return this.getWarehouses()
                    .then(warehouses => warehouses.find(warehouse => warehouse.id === id))
    }

}