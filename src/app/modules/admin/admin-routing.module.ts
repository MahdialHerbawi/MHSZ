import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminRequestReviewComponent } from './admin-request-review/admin-request-review.component';

import { AdminViewClientsComponent } from './admin-view-clients/admin-view-clients.component';
import { AdminViewClientCarsComponent } from './admin-view-client-cars/admin-view-client-cars.component';

const routes: Routes = [{ path: '', component: AdminComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'AdminRequest', component:AdminRequestReviewComponent},
  
  {path:'AdminViewClient',component:AdminViewClientsComponent},
  {path:'AdminViewCar', component:AdminViewClientCarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
