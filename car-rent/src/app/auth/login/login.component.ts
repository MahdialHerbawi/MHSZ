import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private local:LocalStorageService) {

  }

  onLogin() {
    this.local.login(this.email,this.password)
    this.errorMessage='invald email or password'
    //const result:any = this.local.getItem(this.email) && this.local.getItem( this.password);
    //this.errorMessage=JSON.parse(result);
    

      
    
  }
}
