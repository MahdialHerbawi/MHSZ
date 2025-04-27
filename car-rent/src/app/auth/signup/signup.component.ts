import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone: false,
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(private router: Router) {}

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSignUp() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.email || !this.password || !this.confirmPassword || !this.role) {
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
          role: this.role
        });

        localStorage.setItem('users', JSON.stringify(users));

        this.successMessage = 'Sign up successful! Redirecting to login...';
        this.isLoading = false;

        
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.role = '';

        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 1500);
      }
    }, 1500); 
  }
}
