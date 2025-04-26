import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ManagePurchasesComponent } from './manage-purchases/manage-purchases.component';
import { ManageRentalsComponent } from './manage-rentals/manage-rentals.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { AddRentalCarComponent } from './add-rental-car/add-rental-car.component';
import { AddPurchaseCarComponent } from './add-purchase-car/add-purchase-car.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'dashboard', component: ClientDashboardComponent },
  { path: 'profile', component: ClientProfileComponent },
  { path: 'manage-purchases', component: ManagePurchasesComponent },
  { path: 'manage-rentals', component: ManageRentalsComponent },
  { path: 'add-rental', component:  AddRentalCarComponent},
  { path: 'add-purchase', component:  AddPurchaseCarComponent},

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
