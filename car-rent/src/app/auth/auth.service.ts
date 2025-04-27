import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roleSubject = new BehaviorSubject<string | null>(this.getRoleFromStorage());

  role$ = this.roleSubject.asObservable();

  constructor() {}

  private getRoleFromStorage(): string | null {
    const currentUser = localStorage.getItem('users');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      return user.role;
    }
    return null;
  }

  login(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.roleSubject.next(user.role); // 🔥 update role
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.roleSubject.next(null); // 🔥 clear role
  }
}