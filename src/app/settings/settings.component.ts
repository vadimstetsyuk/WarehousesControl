import { Component, OnInit } from '@angular/core';

import { TranslateService } from '../shared/translate';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
    moduleId: module.id,
    selector: 'settings-page',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.css'],
})


export class SettingsComponent {
    isActiveSettingsPage: boolean;

    constructor() {
        this.isActiveSettingsPage = true;
    }
    
    toogleActivePage() {
        this.isActiveSettingsPage = !this.isActiveSettingsPage;
    }
}