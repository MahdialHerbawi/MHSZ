import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car.model';
import { AuthService } from '../../../services/auth.service';
import { CarService } from '../../../services/car.service';
import { Request } from '../../../models/Request.model';

@Component({
  selector: 'app-customer-requests',
  templateUrl: './customer-requests.component.html',
  styleUrls: ['./customer-requests.component.css'],
  standalone:false
})
export class CustomerRequestsComponent implements OnInit {
  requests: Request[] = [];
  carMap: { [id: number]: Car } = {};

  constructor(
    private authService: AuthService,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (!user) return;

    const allRequests: Request[] = JSON.parse(localStorage.getItem('requests') || '[]');
    this.requests = allRequests.filter(r => user.id === user.id);

    const allCars = this.carService.getAllCars();
    this.carMap = Object.fromEntries(allCars.map(car => [car.id, car]));
  }
}
