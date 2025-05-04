import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone: false,
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  {
  email: string = '';
  name: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = '';
  number:string='';
  age:string='';
  errorMessage: string = '';
  successMessage: string = '';
  image:string=''
  isLoading: boolean = false;
  cuastmerdata:any[]|null=[];

  constructor(private router: Router ,private local:LocalStorageService) {}
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSignUp() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.email || !this.password || !this.confirmPassword || !this.role ) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.isLoading = true;

    setTimeout(() => {
      const usersData = localStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];

      const userExists = users.some((u: any) => u.email === this.email);

      if (userExists) {
        this.errorMessage = 'Email already registered. Please login.';
        this.isLoading = false;
      } else {
        users.push({
          email: this.email,
          password: this.password,
          role: this.role,
          name:this.name,
          age:this.age,
          number:this.number,
         image: this.image
        });

        localStorage.setItem('users', JSON.stringify(users));

        this.successMessage = 'Sign up successful! Redirecting to login...';
        this.isLoading = false;

        this.image='';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.role = '';
        this.number='';
        this.age='';
        this.name='';

        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 1500);
      }
    }, 1500); 
  }
}
