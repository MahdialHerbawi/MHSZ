import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { BrowseRentalCarsComponent } from './browse-rental-cars/browse-rental-cars.component';
import { BrowsePurchaseCarsComponent } from './browse-purchase-cars/browse-purchase-cars.component';
import { MyRentalsComponent } from './my-rentals/my-rentals.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomerProfileComponent,
    BrowseRentalCarsComponent,
    BrowsePurchaseCarsComponent,
    MyRentalsComponent,
    MyPurchasesComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
