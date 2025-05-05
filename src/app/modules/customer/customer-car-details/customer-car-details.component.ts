import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../../models/car.model';

@Component({
  selector: 'app-customer-car-details',
  standalone: false,
  templateUrl: './customer-car-details.component.html',
  styleUrl: './customer-car-details.component.css'
})
export class CustomerCarDetailsComponent implements OnInit {
  car!: Car | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const carId = Number(this.route.snapshot.paramMap.get('id'));
    const cars = JSON.parse(localStorage.getItem('cars') || '[]');
    this.car = cars.find((c: Car) => c.id === carId);
  }

  requestCar(car: Car): void {
    const customer = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    const requests = JSON.parse(localStorage.getItem('requests') || '[]');

    const newRequest = {
      id: Date.now(),
      carId: car.id,
      customerName: customer.name || 'Unknown',
      carModel: car.model,
      type: car.type,
      status: 'pending'
    };

    requests.push(newRequest);
    localStorage.setItem('requests', JSON.stringify(requests));

    alert('Request sent successfully!');
    this.router.navigate(['/customer/cars']);
  }
}
