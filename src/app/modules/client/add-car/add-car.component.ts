import { Component } from '@angular/core';
;
import { Router } from '@angular/router';
import { Car } from '../../../models/car.model';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl:'add-car.component.css',
  standalone:false
})
export class AddCarComponent {
  car: Partial<Car> = {
    id:'',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    type: 'rent',
    available: true,
    description: '',
    clientId:Date.now(),
  };

  constructor(private carService: CarService, private router: Router) {}

  addCar() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const newCar: Car = {
      ...(this.car as Car),
      id: currentUser.id,
      owner: currentUser.username
    };
    this.carService.addCar(newCar);
    alert('Car added successfully!');
    this.router.navigate(['/client/cars']);
  }
}
