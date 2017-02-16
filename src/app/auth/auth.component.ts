import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css']
})

export class AuthComponent {
    title: string;

    constructor() {
        this.title = "The auth page";
    }
}