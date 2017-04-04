import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';
import { User } from '../auth/User';
import { UserService } from '../auth/auth.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
    moduleId: module.id,
    selector: 'settings-page',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.css'],
})

export class SettingsComponent implements OnInit, OnChanges {
    currentUser: User;
    users: User[];

    private gridOptions: GridOptions;


    @ViewChild('popupAddUser') popupAddUser: Popup;
    @ViewChild('popupEditUser') popupEditUser: Popup;
    @ViewChild('popupDeleteUser') popupDeleteUser: Popup;

    constructor(private popup: Popup, private userService: UserService) {
        this.users = [new User()];

        this.currentUser = <User>{};
    }

    ngOnInit() {
        this.getUsers();
    }

    ngOnChanges() {
        this.getUsers();
    }

    getUsers() {
        this.userService.getUsers()
            .subscribe(
            users => this.users = users,
            err => {
                console.log(err);
            });
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
            confirmBtnContent: "Додати",
            cancleBtnContent: "Скасувати"
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
            animation: "bounceInDown",
            confirmBtnContent: "Зберегти",
            cancleBtnContent: "Скасувати"
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
            widthProsentage: 28,
            animation: "bounceInDown",
            confirmBtnContent: "Видалити",
            cancleBtnContent: "Скасувати"
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