import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car.model';


@Component({
  selector: 'app-customer-car-list',
  templateUrl: './customer-car-list.component.html',
  styleUrls: ['./customer-car-list.component.css'],
  standalone:false
})
export class CustomerCarListComponent implements OnInit {
  cars: Car[] = [];
  customerRequests: any[] = [];
  currentUserId: number = 0;

  ngOnInit(): void {
    const storedCars = localStorage.getItem('cars');
    this.cars = storedCars ? JSON.parse(storedCars).filter((c: Car) => c.available) : [];

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.currentUserId = loggedInUser.id || 0;

    const allRequests = JSON.parse(localStorage.getItem('requests') || '[]');
    this.customerRequests = allRequests.filter((r: any) => r.customerId === this.currentUserId);
  }

  hasRequest(carId: number): any {
    return this.customerRequests.find(req => req.carId === carId);
  }

  sendRequest(car: Car, type: 'rent' | 'purchase') {
    const request = {
      id: Date.now(),
      carId: car.id,
      carModel: car.model,
      customerName: JSON.parse(localStorage.getItem('loggedInUser') || '{}').name,
      customerId: this.currentUserId,
      type,
      status: 'pending'
    };

    this.customerRequests.push(request);
    const allRequests = JSON.parse(localStorage.getItem('requests') || '[]');
    allRequests.push(request);
    localStorage.setItem('requests', JSON.stringify(allRequests));

    alert(`Request for ${car.model} submitted.`);
  }
}
