import { Component } from '@angular/core';
import { User, AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
 pendingClients: User[] = [];
  currentUser: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.currentUser = JSON.parse(userData);
    const users = this.authService.getUsers();
    this.pendingClients = users.filter(u => u.role === 'client' && u.status === 'pending');
  }
}
}
