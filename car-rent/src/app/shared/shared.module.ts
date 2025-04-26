import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ForbiddenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
