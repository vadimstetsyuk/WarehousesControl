import { 
    Component, 
    OnInit, 
    OnChanges, 
    ViewChild,
    Output,
    EventEmitter
} from '@angular/core';
import { Popup } from 'ng2-opd-popup';
import { Warehouse } from '../../warehouses/Warehouse';
import { WarehouseService } from '../../warehouses/warehouse.service';

import { TranslateService } from '../../shared/translate';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
    moduleId: module.id,
    selector: 'warehouses-settings',
    templateUrl: 'warehouses-settings.component.html',
    styleUrls: ['warehouses-settings.component.css'],
})


export class WarehousesSettingsComponent implements OnInit, OnChanges {
    currentWarehouse: Warehouse;
    warehouses: Warehouse[];

    @Output() onActivePage = new EventEmitter<any>();

    @ViewChild('popupAddWarehouse') popupAddWarehouse: Popup;
    @ViewChild('popupEditWarehouse') popupEditWarehouse: Popup;
    @ViewChild('popupDeleteWarehouse') popupDeleteWarehouse: Popup;

    constructor(private popup: Popup, private warehouseService: WarehouseService) {
        this.warehouses = [new Warehouse()];
        this.currentWarehouse = <Warehouse>{};
    }

    ngOnInit() {
        this.getWarehouses();
    }


    ngOnChanges() {
        this.getWarehouses();
    }

    selectWarehouse(userId: Number) {
        // set current user;
        this.warehouses.forEach(item => {
            if (item.id === userId) {
                this.currentWarehouse = item;
            }
        });
    }

    getWarehouses() {
        this.warehouseService.getWarehouses()
            .subscribe(
            warehouses => this.warehouses = warehouses,
            err => {
                console.log(err);
            });
    }


    showPopupAddWarehouse() {
        this.currentWarehouse = <Warehouse>{};
        this.hidePopup();

        this.popupAddWarehouse.options = {
            cancleBtnClass: "btn btn-default",
            confirmBtnClass: "btn btn-default",
            color: "red",
            header: "Додати склад",
            widthProsentage: 35,
            animation: "bounceInDown",
            confirmBtnContent: "Додати",
            cancleBtnContent: "Скасувати"
        }

        this.popupAddWarehouse.show(this.popupAddWarehouse.options);
    }

    showPopupEditWarehouse() {
        this.hidePopup();

        this.popupEditWarehouse.options = {
            cancleBtnClass: "btn btn-default",
            confirmBtnClass: "btn btn-default",
            color: "red",
            header: "Редагувати склад",
            widthProsentage: 35,
            animation: "bounceInDown",
            confirmBtnContent: "Зберегти",
            cancleBtnContent: "Скасувати"
        }

        this.popupEditWarehouse.show(this.popupEditWarehouse.options);

    }

    showPopupDeleteWarehouse() {
        this.hidePopup();

        this.popupDeleteWarehouse.options = {
            cancleBtnClass: "btn btn-default",
            confirmBtnClass: "btn btn-default",
            color: "red",
            header: "Видалити склад",
            widthProsentage: 28,
            animation: "bounceInDown",
            confirmBtnContent: "Видалити",
            cancleBtnContent: "Скасувати"
        }

        this.popupDeleteWarehouse.show(this.popupDeleteWarehouse.options);
    }

    hidePopup() {
        this.popup.hide();
    }

    addUser() {
        this.currentWarehouse.id = this.warehouses.length + 1;

        console.log(this.currentWarehouse);

        this.warehouseService.addWarehouse(this.currentWarehouse)
            .subscribe((data) => { this.currentWarehouse = data; });

        // add user to the list
        this.warehouses.push(this.currentWarehouse);
        this.hidePopup();
        this.currentWarehouse = <Warehouse>{};
    }

    editUser() {
        console.log(this.currentWarehouse);

        this.warehouseService.editWarehouse(this.currentWarehouse)
            .subscribe((data) => { this.currentWarehouse = data; });

        this.hidePopup();
    }

    deleteUser() {
        this.warehouseService.deleteWarehouse(this.currentWarehouse)
            .subscribe(
            result => console.log(result));

        console.log(this.currentWarehouse.id);

        this.hidePopup();

        this.getWarehouses();
    }

    rowClicked(id: any) {
        this.hidePopup();
        console.log(id);
        this.warehouses.forEach(element => {
            if (element.id === id) {
                this.currentWarehouse = element;
            }
        });
    }

    defineStyle(id: Number) {
        return this.currentWarehouse.id === id;
    }

    toogleActivePage() {
        this.onActivePage.emit();
    }
}