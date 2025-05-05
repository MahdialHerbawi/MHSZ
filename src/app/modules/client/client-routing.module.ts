import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ProfileComponent } from './profile/profile.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarListComponent } from './car-list/car-list.component';
import { ClientRequestReviewComponent } from './client-request-review/client-request-review.component';


const routes: Routes = [{ path: '', component: ClientComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'car/:id', component: CarDetailsComponent },
  {path:'ClientRequest', component:ClientRequestReviewComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
