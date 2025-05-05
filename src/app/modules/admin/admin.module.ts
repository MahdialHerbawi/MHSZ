import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AdminRequestReviewComponent } from './admin-request-review/admin-request-review.component';

import { AdminViewClientsComponent } from './admin-view-clients/admin-view-clients.component';
import { AdminViewClientCarsComponent } from './admin-view-client-cars/admin-view-client-cars.component';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from '../../shared/footer/footer.component';
import { AppModule } from '../../app.module';


@NgModule({
  declarations: [
    AdminComponent,
    ProfileComponent,
    AdminRequestReviewComponent,
    AdminViewClientsComponent,
    AdminViewClientCarsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
   
    
]
})
export class AdminModule { }
