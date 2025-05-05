import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

import { CustomerCarListComponent } from './customer-car-list/customer-car-list.component';
import { CustomerCarDetailsComponent } from './customer-car-details/customer-car-details.component';
import { CustomerRequestsComponent } from './customer-requests/customer-requests.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    CustomerComponent,
    ProfileComponent,

    CustomerCarListComponent,
    CustomerCarDetailsComponent,
    CustomerRequestsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule, 
    FormsModule
  ]
})
export class CustomerModule { }
