import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Warehouse } from './Warehouse';
import { Product } from '../products/Product';

import { WarehouseService } from './warehouse.service';
import { ProductService } from '../products/product.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Component({
    moduleId: module.id,
    selector: 'warehouses-page',
    templateUrl: 'warehouses.component.html',
    styleUrls: ['warehouses.component.css'],
    providers: [WarehouseService]
})

export class WarehousesComponent implements OnInit {
    warehouses: Warehouse[] = [];
    products: Product[] = [];

    constructor(private warehouseService: WarehouseService,
        private productService: ProductService,
        private router: Router) { }

    ngOnInit() {
        this.getWarehousesData();
        this.getProductsData();
        if(this.warehouses) {
            this.setAmountProductsForEachWarehouse();
        }
    }

    clickedWarehouse(warehouse: Warehouse) {
        console.log(this.router.url);

        let link = [this.router.url + '/detail', warehouse.id];
        this.router.navigate(link);
    }

    getWarehousesData() {
        this.warehouseService.getWarehouses()
            .subscribe(
            warehouses => this.warehouses = warehouses,
            err => {
                console.log(err);
            });
    }

    getProductsData() {
        this.productService.getProducts()
            .subscribe(
            products => this.products = products,
            err => {
                console.log(err);
            });
    }

    setAmountProductsForEachWarehouse() {
        for (var i = 1; i <= this.warehouses.length; i++) {
            let temp: Product[] = [];

            this.productService.getProductsById(i)
                .subscribe(
                amountProducts => temp = amountProducts,
                err => {
                    console.log(err);
                });
            this.warehouses[i - 1].amountProducts = temp.length;
        }        
    }
}