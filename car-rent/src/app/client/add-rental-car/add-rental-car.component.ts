import { Component } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-add-rental-car',
  standalone: false,
  templateUrl: './add-rental-car.component.html',
  styleUrl: './add-rental-car.component.scss'
})
export class AddRentalCarComponent {
  rentCarData = {
    carname: '',
    rentDate: '',
    returnDate: '',
    price: '',
    customerName: ''
  };

  constructor(private localStorageService: LocalStorageService) {}

  rentCar(): void {
    const rentedCars = this.localStorageService.getItem<any[]>('rentedCars') || [];
    rentedCars.push(this.rentCarData);
    this.localStorageService.setItem('rentedCars', rentedCars);

    // Clear the form
    this.rentCarData = { carname: '', rentDate: '', returnDate: '', price: '', customerName: '' };
    alert('Car rented successfully!');
  }
}
