import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Warehouse } from '../Warehouse';
import { WarehouseService } from '../warehouse.service';
import { Product } from '../../products/Product';
import { ProductService } from '../../products/product.service';

@Component({
    moduleId: module.id,
    selector: 'warehouse-detail',
    templateUrl: 'warehouse-detail.component.html',
    styleUrls: ['warehouse-detail.component.css']
})

export class WarehouseDetailComponent {
    selectedWarehouse: Warehouse;
    products: Product[];

    constructor(
        private warehouseService: WarehouseService,
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.products = [];
    }

    // When initialized, fetch for the product info based on the product id and set it as selectedProduct
    ngOnInit() {
        this.route.params.forEach(param => {
            let id = parseInt(param['id'])
            this.warehouseService.getWarehouse(id)
                .then(product => this.selectedWarehouse = product)
        });

        this.getProductData();

        if (this.products != null) {
            this.products.forEach(product => {
                if (product.parentId != this.selectedWarehouse.id)
                    this.products.pop;
            });
        }
    }

    getProductData() {
        this.productService.getProducts().then(products => this.products = products);
    }

    goBack() {
        this.location.back()
    }
}