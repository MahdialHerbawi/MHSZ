import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AddCarComponent } from './add-car/add-car.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ClientRequestReviewComponent } from './client-request-review/client-request-review.component';



@NgModule({
  declarations: [
    ClientComponent,
    ProfileComponent,
    AddCarComponent,
    CarListComponent,
    CarDetailsComponent,
    ClientRequestReviewComponent,
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
