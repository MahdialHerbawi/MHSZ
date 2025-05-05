import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car.model';
import { AuthService } from '../../../services/auth.service';
import { CarService } from '../../../services/car.service';
import { Request } from '../../../models/Request.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  standalone:false
})
export class PaymentComponent implements OnInit {
  approvedRequests: Request[] = [];
  carMap: { [id: number]: Car } = {};
  paidRequestIds: number[] = [];

  constructor(
    private authService: AuthService,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (!user) return;

    const allRequests: Request[] = JSON.parse(localStorage.getItem('cars') || '[]');
    const payments = JSON.parse(localStorage.getItem('payments') || '[]');

    this.paidRequestIds = payments.map((p: any) => p.requestId);

    this.approvedRequests = allRequests.filter(
      req => req.customerId === user.id && req.status === 'approved'
    );

   
  }

  makePayment(requestId: number) {
    const payments = JSON.parse(localStorage.getItem('payments') || '[]');
    payments.push({ requestId, date: new Date().toISOString() });
    localStorage.setItem('payments', JSON.stringify(payments));
    this.paidRequestIds.push(requestId);
    alert('Payment completed successfully!');
  }

  isPaid(requestId: number): boolean {
    return this.paidRequestIds.includes(requestId);
  }
}
