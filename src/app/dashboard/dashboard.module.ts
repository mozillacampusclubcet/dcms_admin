import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';

import { HomeModule } from './home/home.module';
import { BlankPageModule } from './blank-page/blankPage.module';
import { TableModule } from './tables/table.module';
import { FormModule } from './forms/forms.module';
import { GridModule } from './grid/grid.module';
import { BSComponentModule } from './bs-component/bsComponent.module';
import { BSElementModule } from './bs-element/bsElement.module';

import { DashboardComponent } from './dashboard.component';

import {TopNavComponent} from '../shared/index';
import {SidebarComponent} from '../shared/index';
import { AdminsComponent } from './admins/admins.component';

import {FormsModule} from '@angular/forms'

import {DataTableModule} from 'angular-2-data-table-bootstrap4';
import { EventsComponent } from './events/events.component';
import { StudentsComponent } from './students/students.component'

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import {firebaseConfig} from '../app.module'

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};



@NgModule({
    imports: [
        FormsModule,
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule,
    	HomeModule,
        TableModule,
        FormModule,
        GridModule,
    	BSComponentModule,
        BSElementModule,
        BlankPageModule,
        DataTableModule,
        AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)
    ],
    declarations: [DashboardComponent, TopNavComponent, SidebarComponent, AdminsComponent, EventsComponent, StudentsComponent],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent]
})

export class DashboardModule { }
