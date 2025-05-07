import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone:false
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  role: 'client' | 'customer' = 'client'; // Choose role
  errorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    
    const newUser: User = {
      id: Date.now(),
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role,
      status: 'pending'
    };

    const success = this.authService.register(newUser);

    if (success) {
      if (this.role === 'customer') {
        this.successMessage = 'Registration successful!';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/auth/login']); // Redirect to login page after delay
        }, 1500); // Redirect to login page
      } else {
        this.successMessage = 'Registration successful. Please wait for admin approval.';
        this.errorMessage = '';
      }
      this.name = this.email = this.password = '';
    } else {
      this.errorMessage = 'Email already registered.';
      this.successMessage = '';
    }
  }
}
