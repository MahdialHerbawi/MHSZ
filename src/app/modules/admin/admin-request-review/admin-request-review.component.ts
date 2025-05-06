import { Component, OnInit } from '@angular/core';
import {  AuthService } from '../../../services/auth.service';
import { User } from '../../../models/users.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-request-review',
  templateUrl: './admin-request-review.component.html',
  standalone:false,
  styleUrl:'admin-request-review.component.scss'
})
export class AdminRequestReviewComponent implements OnInit {
  pendingClients: User[]|any = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const current = this.authService.getCurrentUser();
    if (!current || current.role !== 'admin') {
      alert('Unauthorized access');
      this.router.navigate(['/login']);
      return;
    }
    this.loadPendingClients();
  }

  loadPendingClients(): void {
   this.pendingClients = this.authService.getPendingClients();
  }

  approveClient(id: number): void {
    this.authService.updateUserStatus(id, 'approved');
    this.loadPendingClients();
  }

  rejectClient(id: number): void {
    this.authService.updateUserStatus(id, 'rejected');
    this.loadPendingClients();
  }
}
