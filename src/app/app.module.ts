import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {MaterializeModule} from "angular2-materialize";

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { ErrorsComponent } from './errors-page/errors-page.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent, data: { title: 'Auth page' } },
  { path: 'reports', component: ReportsComponent, data: { title: 'Reports page' } },
  { path: 'settings', component: SettingsComponent, data: { title: 'Settings page' } },
  { path: 'warehouses', component: WarehousesComponent, data: { title: 'Warehouses page' } },
  { path: '**', component: ErrorsComponent, data: { title: 'Errors page' } }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ReportsComponent,
    SettingsComponent,
    WarehousesComponent,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
