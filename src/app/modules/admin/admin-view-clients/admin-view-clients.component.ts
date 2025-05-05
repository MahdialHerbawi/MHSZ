import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/users.model';


@Component({
  selector: 'app-admin-view-clients',
  templateUrl: './admin-view-clients.component.html',
  styleUrls: ['./admin-view-clients.component.css'],
  standalone:false
})
export class AdminViewClientsComponent implements OnInit {
  clients: User[] = [];

  ngOnInit(): void {
    const allUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    this.clients = allUsers.filter(user => user.role === 'client');
  }
}
