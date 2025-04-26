import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { AddRentalCarComponent } from './add-rental-car/add-rental-car.component';
import { AddPurchaseCarComponent } from './add-purchase-car/add-purchase-car.component';
import { ManageRentalsComponent } from './manage-rentals/manage-rentals.component';
import { ManagePurchasesComponent } from './manage-purchases/manage-purchases.component';


@NgModule({
  declarations: [
    ClientDashboardComponent,
    ClientProfileComponent,
    AddRentalCarComponent,
    AddPurchaseCarComponent,
    ManageRentalsComponent,
    ManagePurchasesComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
