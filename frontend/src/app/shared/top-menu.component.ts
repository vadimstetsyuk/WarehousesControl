import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'top-menu',
    templateUrl: 'top-menu.component.html'
})

export class TopMenuComponent implements OnInit, OnChanges {
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