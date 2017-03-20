import { Component, OnInit, ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';

import { User } from '../auth/User';

@Component({
    moduleId: module.id,
    selector: 'settings-page',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.css']
})

export class SettingsComponent implements OnInit {
    currentUser: User;
    users: User[];

    @ViewChild('popupAddUser') popupAddUser: Popup;
    @ViewChild('popupEditUser') popupEditUser: Popup;
    @ViewChild('popupDeleteUser') popupDeleteUser: Popup;

    constructor(private popup: Popup, ) {

    }

    ngOnInit() {
    }


    showPopupAddUser() {
        this.hidePopup();

        this.popupAddUser.options = {
            cancleBtnClass: "btn btn-default",
            confirmBtnClass: "btn btn-default",
            color: "red",
            header: "Додати користувача",
            widthProsentage: 35,
            animation: "bounceInDown",

        }

        this.popupAddUser.show(this.popupAddUser.options);
    }

    showPopupEditUser() {
        this.hidePopup();

        this.popupEditUser.options = {
            cancleBtnClass: "btn btn-default",
            confirmBtnClass: "btn btn-default",
            color: "red",
            header: "Редагувати користувача",
            widthProsentage: 35,
            animation: "bounceInDown"
        }

        this.popupEditUser.show(this.popupEditUser.options);

    }

    showPopupDeleteUser() {
        this.hidePopup();
        
        this.popupDeleteUser.options = {
            cancleBtnClass: "btn btn-default",
            confirmBtnClass: "btn btn-default",
            color: "red",
            header: "Видалити користувача",
            widthProsentage: 35,
            animation: "bounceInDown"
        }

        this.popupDeleteUser.show(this.popupDeleteUser.options);
    }

    YourConfirmEvent() {
        alert('You cliked confirm');
        this.popupAddUser.hide();
    }

    login() {
        this.popup.hide();
    }

    hidePopup() {
        this.popup.hide();
    }
}