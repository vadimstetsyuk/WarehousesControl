import { Component } from '@angular/core';

import { TranslateService } from '../translate';

@Component({
    moduleId: module.id,
    selector: 'footer-menu',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})

export class FooterComponent {
    public translatedText: string;
    public supportedLanguages: any[];

    public currentLang: String;

    constructor(private _translate: TranslateService) {
        this.currentLang = 'en';
    }

    ngOnInit() {

        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: 'Ukrainian', value: 'ua' },
        ];

        // set current langage
        this.selectLang('en');
    }

    isCurrentLang(lang: string) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set current lang;
        this.currentLang = lang;
        this._translate.use(lang);
        this.refreshText();
    }

    refreshText() {
        // refresh translation when language change
        this.translatedText = this._translate.instant('hello world');
    }
}