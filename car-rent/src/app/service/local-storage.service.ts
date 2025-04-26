import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  constructor(private router: Router) { 
    localStorage.setItem('users', JSON.stringify([
      { email: 'admin@example.com', password: 'admin123', role: 'admin' },
      { email: 'client@example.com', password: 'client123', role: 'client' },
      { email: 'customer@example.com', password: 'customer123', role: 'customer' }
    ]));
  }
  getusers(email: string, password: string): string | void {
    const usersData = localStorage.getItem('users');
    const users = usersData ? JSON.parse(usersData) : [];
  
      const user = users.find(
        (u: any) => u.email === email && u.password === password
      );
  
      if (user) {
        
        localStorage.setItem('token', 'dummy-token');
        localStorage.setItem('role', user.role);
  
        
        if (user.role === 'admin') {
          this.router.navigate(['/admin/dashboard']);
          return;
        } else if (user.role === 'client') {
          this.router.navigate(['/client/dashboard']);
          return;
        } else if (user.role === 'customer') {
          this.router.navigate(['/customer/dashboard']);
          return;
        }
      } else {
        
        return 'Invalid email or password.';
      }
  } 
}
