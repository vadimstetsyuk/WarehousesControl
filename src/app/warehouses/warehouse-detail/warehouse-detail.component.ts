import { Component, OnInit } from '@angular/core';
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
    styleUrls: ['warehouse-detail.component.css'],
    providers: [ProductService]
})

export class WarehouseDetailComponent implements OnInit {
    selectedWarehouse: Warehouse;
    products: Product[];
    chart: any;
    options: Object;

    constructor(
        private warehouseService: WarehouseService,
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.options = {
            chart: { type: 'spline' },
            title: { text: 'Температура на складі' },
            series: [{ data: [2, 3, 5, 8, 13] }]
        };

        setInterval(() => this.chart.series[0].addPoint(Math.random() * 10), 1000);
    }

    ngOnInit() {
        this.defineSelectedWarehouse();
        this.getProductsDataById(this.getCurrentId());
    }

    getProductsDataById(id: number) {
        this.productService.getProductsById(id)
            .subscribe(
            products => this.products = products,
            err => {
                console.log(err);
            });
    }

    defineSelectedWarehouse() {
        let id = this.getCurrentId();

        this.warehouseService.getWarehouseById(id)
            .subscribe(
            warehouse => this.selectedWarehouse = warehouse,
            err => {
                console.log(err);
            });
    }

    getCurrentId() : any {
        let id;
        this.route.params.forEach(param => {
            id = parseInt(param['id'])
        });

        return id;
    }

    goBack() {
        this.location.back()
    }

    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }
}