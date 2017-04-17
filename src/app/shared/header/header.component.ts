import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { TranslateService } from '../translate';

@Component({
    moduleId: module.id,
    selector: 'header-menu',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit, OnChanges {
    @Input() public isActiveTabs: boolean;
    public loginLabel: string;

    constructor() {
        this.loginLabel = "Увійти";
    }

    public ngOnInit() {
    }

    public ngOnChanges() {
        this.isActiveTabs ? this.loginLabel = "Вийти" : this.loginLabel = "Увійти";
    }
}