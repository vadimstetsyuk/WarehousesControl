import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'reports-page',
    templateUrl: 'reports.component.html'
})

export class ReportsComponent {
    title: string;

    constructor() {
        this.title = "The reports page";
    }
}