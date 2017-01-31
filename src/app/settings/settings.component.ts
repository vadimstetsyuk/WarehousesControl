import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'settings-page',
    templateUrl: 'settings.component.html'
})

export class SettingsComponent {
    title: string;

    constructor() {
        this.title = "The settings page";
    }
}