import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'errors-page',
    templateUrl: 'errors-page.component.html'
})

export class ErrorsComponent {
    title: string;

    constructor() {
        this.title = "The errors page";
    }
}