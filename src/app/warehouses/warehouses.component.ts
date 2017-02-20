import { Component, OnInit } from '@angular/core';
import { Warehouse } from './Warehouse';
import { Product } from '../products/Product';

import { WarehouseService } from './warehouse.service';
import { ProductService } from '../products/product.service';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'warehouses-page',
    templateUrl: 'warehouses.component.html',
    styleUrls: ['warehouses.component.css']
})

export class WarehousesComponent implements OnInit {
    warehouses: Warehouse[];
    products: Product[];
    amount: number;

    constructor(private warehouseService: WarehouseService,
        private productService: ProductService,
        private router: Router) { }

    clickedWarehouse(warehouse) {
        let link = [this.router.url + '/detail', warehouse.id];
        this.router.navigate(link);
    }

    getWarehouseData() {
        this.warehouseService.getWarehouses().then(warehouses => this.warehouses = warehouses);
    }

    getProductData() {
        this.productService.getProducts().then(products => this.products = products);
    }

    defineAmountOfProductsForEachWarehouse() {
        if (this.warehouses != null) {
            this.warehouses.forEach(warehouse => {
                warehouse.amountProducts = 0;
                this.products.forEach(product => {
                    if (product.parentId == warehouse.id) {
                        warehouse.amountProducts++;
                    }
                });
            });
        }
    }

    ngOnInit() {
        // Get initial data from productService to display on the page
        this.getWarehouseData();
        this.getProductData();
        this.defineAmountOfProductsForEachWarehouse();
    }
}