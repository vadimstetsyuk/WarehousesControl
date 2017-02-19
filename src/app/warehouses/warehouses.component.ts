import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'warehouses-page',
    templateUrl: 'warehouses.component.html',
    styleUrls: ['warehouses.component.css']
})

export class WarehousesComponent {
    title: string;

    constructor() {
        this.title = "The warehouses page";
    }
}