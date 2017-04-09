import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';
import { User } from '../auth/User';
import { UserService } from '../auth/auth.service';

import { TranslateService } from '../shared/translate';

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

    @ViewChild('popupAddUser') popupAddUser: Popup;
    @ViewChild('popupEditUser') popupEditUser: Popup;
    @ViewChild('popupDeleteUser') popupDeleteUser: Popup;

    constructor(private popup: Popup, private userService: UserService) {
        this.users = [new User()];
        this.currentUser = <User>{ id: 0, firstName: '', lastName: '', username: '', email: '', password: '', role: '', dateRegister: '' };
    }

    ngOnInit() {
        this.getUsers();
    }


    ngOnChanges() {
        this.getUsers();
    }

    selectUser(user: string) {
        // set current lang;
        this.users.forEach(item => {
            if (item.username === user) {
                this.currentUser = item;
            }
        });
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

    addUser() {
        this.currentUser.id = this.users.length + 1;
        this.currentUser.role = 'user';
        this.currentUser.dateRegister = '01.12.16';
        console.log(this.currentUser);
        this.userService.addUser(this.currentUser)
            .subscribe((data) => { this.currentUser = data; });
    }

    editUser() {
        this.currentUser.role = 'user';
        this.currentUser.dateRegister = '01.12.16';
        console.log(this.currentUser);
        this.userService.editUser(this.currentUser)
            .subscribe((data) => { this.currentUser = data; });
    }

    rowClicked(id: any) {
        console.log(id);
        this.users.forEach(element => {
            if(element.id === id) {
                this.currentUser = element;
            }
        });
    }

    defineStyle(id: Number) {
        return this.currentUser.id === id;
    }
}