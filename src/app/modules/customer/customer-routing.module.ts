import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerCarListComponent } from './customer-car-list/customer-car-list.component';
import { CustomerCarDetailsComponent } from './customer-car-details/customer-car-details.component';

import { CustomerRequestsComponent } from './customer-requests/customer-requests.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [{ path: '', component: CustomerComponent },
  { path: 'profile', component: ProfileComponent,
    
   },
   {
    path:'car-list',component:CustomerCarListComponent
   },
   {
    path:'car-details',component:CustomerCarDetailsComponent
   },
  
   {
    path:'my-request',component:CustomerRequestsComponent
   },
   {
    path:'paymant',component:PaymentComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
