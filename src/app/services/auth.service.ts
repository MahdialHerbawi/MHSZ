import { Injectable } from "@angular/core";

export interface User {
  
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'client' | 'customer';
  status: 'pending' | 'approved' | 'rejected';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: User | null = null;

  register(user: User): boolean {
    const users = this.getUsers();
    const exists = users.find(u => u.email === user.email);
    if (exists) return false;
    user.id = Date.now();
    users.push(user);
    this.setUsers(users);
    return true;
  }

  login(email: string, password: string): { success: boolean; message: string; user?: User } {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
  
    if (!user) {
      return { success: false, message: 'Invalid email or password.' };
    }
  
    if (user.role === 'client' && user.status !== 'approved') {
      return { success: false, message: 'Client account not approved by admin yet.' };
    }
  
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, message: 'Login successful.', user };
  }
  

  getCurrentUser(): User | null {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  setUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  getPendingClients(): User[] {
    return this.getUsers().filter(u => u.role === 'client' && u.status === 'pending');
  }

  updateUserStatus(userId: number, status: 'approved' | 'rejected') {
    const users = this.getUsers().map(u => {
      if (u.id === userId) u.status = status;
      return u;
    });
    this.setUsers(users);
  }
}
