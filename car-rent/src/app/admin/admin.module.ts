import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminProfileComponent,
    ManageUsersComponent,
    ManageCarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
