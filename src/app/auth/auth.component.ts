import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '../shared/translate';

@Component({
    moduleId: module.id,
    selector: 'auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.css']
})

export class AuthComponent {

    constructor(private _router: Router) {
    }

    checkForm() {
        window.location.href = '/home/warehouses';
    }
}