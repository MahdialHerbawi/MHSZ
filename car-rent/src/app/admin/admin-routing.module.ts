import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'profile', component: AdminProfileComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'manage-cars', component: ManageCarsComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
