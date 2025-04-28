import { Component } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-purchase-car',
  standalone: false,
  templateUrl: './add-purchase-car.component.html',
  styleUrl: './add-purchase-car.component.scss'
})
export class AddPurchaseCarComponent {
  purchaseCarData = {
    carname: '',
    purchaseDate: '',
    price: '',
    customerName: ''
  };

  constructor(private localStorageService: LocalStorageService,private route:Router) {}
  isFormValid(): boolean {
    return this.purchaseCarData.carname !== '' &&
           this.purchaseCarData.purchaseDate !== '' &&
           this.purchaseCarData.price !== '' &&
           this.purchaseCarData.customerName !== '';
  }
  purchaseCar(): void {
    if (!this.isFormValid()) {
      alert('Please fill in all fields before proceeding.');
      return;}
    const purchasedCars = this.localStorageService.getItem<any[]>('purchasedCars') || [];
    purchasedCars.push(this.purchaseCarData);
    this.localStorageService.setItem('purchasedCars', purchasedCars);

    // Clear form after submission
    this.purchaseCarData = { carname: '', purchaseDate: '', price: '', customerName: '' };
    alert('Car purchased successfully!');
    this.route.navigate(['/client/dashboard'])
    
  }
} 
