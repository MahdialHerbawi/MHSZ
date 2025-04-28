import { Component } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-manage-cars',
  standalone: false,
  templateUrl: './manage-cars.component.html',
  styleUrl: './manage-cars.component.scss'
})
export class ManageCarsComponent {
  rentedCars: any= [];
  purchasedCars: any[] = [];  
  constructor(private localStorageService: LocalStorageService) {}
  ngOnInit(): void {
    this.loadRentedCars();
    this.loadPurchasedCars();
  }
  loadRentedCars(): void {
    this.rentedCars = this.localStorageService.getItem('rentedCars') || [];
  }
  loadPurchasedCars(): void {
    this.purchasedCars = this.localStorageService.getItem<any[]>('purchasedCars') || [];
  }
}
