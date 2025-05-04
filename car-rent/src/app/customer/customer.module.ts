import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

import { MyRentalsComponent } from './my-rentals/my-rentals.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomerProfileComponent,
   
    MyRentalsComponent,
    MyPurchasesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    
    
  ]
})
export class CustomerModule { }
