import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private router: Router, private auth:AuthService) { 
    // Only set default users if not already set
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([
        { email: 'admin@example.com', password: 'admin123', role: 'admin' },
        { email: 'client@example.com', password: 'client123', role: 'client' },
        { email: 'customer@example.com', password: 'customer123', role: 'customer' }
      ]));
    }
    if (!localStorage.getItem('car')) {
      localStorage.setItem('car', JSON.stringify([
        { carname: 'bice', yers: '2020',pricerent:'25jd', type: 'rent' },
        { carname: 'bice2', yers: '2021',pricerent:'27jd', type: 'rent' },
        { carname: 'bice3', yers: '2022',pricerent:'26jd', type: 'rent' },
      ]));
    }
  }

  /** ========== Generic LocalStorage Methods ========== */

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  /** ========== Authentication Methods ========== */

  login(email: string, password: string): string | void {
    const usersData = localStorage.getItem('users');
    const users = usersData ? JSON.parse(usersData) : [];

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem('token', 'dummy-token');
      localStorage.setItem('role', user.role);
      localStorage.setItem('email', user.email);
      this.auth.login(user); // optional: save logged email

      // Navigate based on role
      if (user.role === 'admin') {
        this.router.navigate(['/admin/dashboard']);
      } else if (user.role === 'client') {
        this.router.navigate(['/client/dashboard']);
      } else if (user.role === 'customer') {
        this.router.navigate(['/customer/dashboard']);
      }
    } else {
      return 'Invalid email or password.';
    }
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
   datacar():any{

    return JSON.parse(localStorage.getItem('car')||'');
  }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }
  
}