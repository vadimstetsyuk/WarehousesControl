import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    OnChanges,
    ViewChild
} from '@angular/core';
import { Popup } from 'ng2-opd-popup';
import { User } from '../../auth/User';
import { UserService } from '../../auth/auth.service';

import { TranslateService } from '../../shared/translate';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
    moduleId: module.id,
    selector: 'users-settings',
    templateUrl: 'users-settings.component.html',
    styleUrls: ['users-settings.component.css'],
})


export class UsersSettingsComponent {
    currentUser: User;
    users: User[];

    @Output() onActivePage = new EventEmitter<any>();

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

    selectUser(userId: Number) {
        // set current user;
        this.users.forEach(item => {
            if (item.id === userId) {
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
        this.currentUser = <User>{};
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

        // add user to the list
        this.users.push(this.currentUser);
        this.hidePopup();
        this.currentUser = <User>{};
    }

    editUser() {
        this.currentUser.role = 'user';
        this.currentUser.dateRegister = '01.12.16';
        console.log(this.currentUser);
        this.userService.editUser(this.currentUser)
            .subscribe((data) => { this.currentUser = data; });

        this.hidePopup();
    }

    deleteUser() {
        this.userService.deleteUser(this.currentUser)
            .subscribe(
            result => console.log(result));

        console.log(this.currentUser.id);

        this.hidePopup();

        this.getUsers();
    }

    rowClicked(id: any) {
        this.hidePopup();

        console.log(id);
        this.users.forEach(element => {
            if (element.id === id) {
                this.currentUser = element;
            }
        });
    }

    defineStyle(id: Number) {
        return this.currentUser.id === id;
    }

    toogleActivePage() {
        this.onActivePage.emit();
    }
}