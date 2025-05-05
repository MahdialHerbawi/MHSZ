import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:false
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  auth: any;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const adminUser = { name:'admin',username: 'admin@example.com', password: 'admin123', role: 'admin' };

    if (
      this.email=== adminUser.username &&
      this.password === adminUser.password
    ) {
      localStorage.setItem('currentUser', JSON.stringify(adminUser));
      alert('Admin login successful!');
      this.router.navigate(['/admin']);
      return;
    }
    const result = this.authService.login(this.email, this.password);
    if (result.success) {
      localStorage.setItem('token', 'dummy-token');
      localStorage.setItem('role', result.user?.role || '');
      localStorage.setItem('email', result.user?.email || '');
      this.auth.login(result.user);

      if (result.user?.role === 'admin') {
        this.router.navigate(['/admin/requests']);
      } else if (result.user?.role === 'client') {
        this.router.navigate(['/client']);
      } else if (result.user?.role === 'customer') {
        this.router.navigate(['/customer']);
      }
    } else {
      this.errorMessage = result.message;
    }
  }
}
