// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './shared/forbidden/forbidden.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RoleGuard } from './shared/guards/role.guard';

const routes: Routes = [
//   { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),  canActivate: [AuthGuard, RoleGuard],
//     data: { expectedRole: 'admin' }},
//   { path: 'client', loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule), canActivate: [AuthGuard, RoleGuard],
//     data: { expectedRole: 'client' } },
//   { path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule), canActivate: [AuthGuard, RoleGuard],
//     data: { expectedRole: 'customer' } },
//   { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, 
//   // app-routing.module.ts
// { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
// // default route
// {
//   path: 'forbidden',
//   component: ForbiddenComponent,
// },
// {
//   path: '**',
//   redirectTo: '/auth/login'
// }

{ path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'admin' }
  },
  {
    path: 'client',
    loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'client' }
  },
  {
    path: 'customer',
    loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'customer' }
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
