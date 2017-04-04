import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './shared/top-menu.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { ErrorsComponent } from './errors-page/errors-page.component';
import { WarehouseDetailComponent } from './warehouses/warehouse-detail/warehouse-detail.component';

import { WarehouseService } from './warehouses/warehouse.service';
import { ProductService } from './products/product.service';
import { UserService } from './auth/auth.service';

import { ChartModule } from 'angular2-highcharts';
import { PopupModule } from 'ng2-opd-popup';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent, data: { title: 'Auth page' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home page' } },
  { path: 'home/reports', component: ReportsComponent, data: { title: 'Reports page' } },
  { path: 'home/settings', component: SettingsComponent, data: { title: 'Settings page' } },
  { path: 'home/warehouses', component: WarehousesComponent, data: { title: 'Warehouses page' } },
  { path: 'home/warehouses/detail/:id', component: WarehouseDetailComponent, data: { title: "Detail page" } },
  { path: '**', component: ErrorsComponent, data: { title: 'Errors page' } }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    TopMenuComponent,
    ReportsComponent,
    SettingsComponent,
    WarehousesComponent,
    ErrorsComponent,
    WarehouseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    ChartModule.forRoot(require('highcharts')),
    PopupModule.forRoot()
  ],
  entryComponents: [WarehouseDetailComponent],
  providers: [WarehouseService, ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
