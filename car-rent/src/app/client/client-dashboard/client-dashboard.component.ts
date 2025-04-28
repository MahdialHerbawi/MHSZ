import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-client-dashboard',
  standalone: false,
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.scss'
})
export class ClientDashboardComponent implements OnInit {
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
