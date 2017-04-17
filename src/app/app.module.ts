import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { ErrorsComponent } from './errors-page/errors-page.component';
import { WarehouseDetailComponent } from './warehouses/warehouse-detail/warehouse-detail.component';
import { UsersSettingsComponent } from './settings/users-settings/users-settings.component';
import { WarehousesSettingsComponent } from './settings/warehouses-settings/warehouses-settings.component';

 
import { WarehouseService } from './warehouses/warehouse.service';
import { ProductService } from './products/product.service';
import { UserService } from './auth/auth.service';

import { ChartModule } from 'angular2-highcharts';
import { PopupModule } from 'ng2-opd-popup';

import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './shared/translate';

import { BsDropdownModule } from 'ngx-bootstrap';

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
    HeaderComponent,
    FooterComponent,
    ReportsComponent,
    SettingsComponent,
    WarehousesComponent,
    ErrorsComponent,
    WarehouseDetailComponent,
    TranslatePipe,
    UsersSettingsComponent,
    WarehousesSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    ChartModule.forRoot(require('highcharts')),
    PopupModule.forRoot(),
    BsDropdownModule.forRoot()
    
  ],
  entryComponents: [WarehouseDetailComponent],
  providers: [WarehouseService, ProductService, UserService,
              TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
