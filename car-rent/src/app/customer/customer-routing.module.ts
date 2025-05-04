import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

import { MyRentalsComponent } from './my-rentals/my-rentals.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
     { path: 'dashboard', component: CustomerDashboardComponent },
    { path: 'profile', component: CustomerProfileComponent },
   
    { path: 'my-rentals', component:  MyRentalsComponent },
    { path: 'my-purchase', component:  MyPurchasesComponent},
  
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { 
  
}
