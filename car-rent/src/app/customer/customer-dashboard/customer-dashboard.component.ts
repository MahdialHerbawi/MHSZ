import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';
 // Adjust path if needed

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
  standalone:false,
  animations: [
    // if you have slideAnimation, import it from animations.ts or define it here
  ]
})
export class CustomerDashboardComponent implements OnInit{
  car: string = '';
  yers: string = '';
  pricerent: string = '';
  role: string = '';
  rentalCars:any []=[];
  purchasableCars:any[]=[]
  cars: any[] = [];
  stored:any
  activeTab: 'rent' | 'purchase' = 'rent'; // <- Default tab when page loads
  
  

  

  constructor(private local:LocalStorageService,private router: Router
  )  {
   
  }
  ngOnInit(): void {
   this.rentalCars= this.local.datacar()
   this.purchasableCars=this.local.datacar()
  this.stored = this.local.getItem('car');
   this.cars = this.stored ? JSON.parse(this.stored) : [];
   const stored = localStorage.getItem('dashboard_customer');
  this.cars = stored ? JSON.parse(stored) : [];
  }
 
  
  switchTab(tab: 'rent' | 'purchase') {
    this.activeTab = tab;
  }

  confirmRent(car: any) {
    this.local.setItem('selectedRentCar', car);
    this.router.navigate(['/customer/my-rentals']);
  }

  confirmPurchase(car: any) {
    this.local.setItem('selectedPurchaseCar', car);
    this.router.navigate(['/customer/my-purchase']);
  }
  rentCar(car: any) {
    const rentedCar = { ...car, status: 'available' };
  
    // Save to my_rent_customer
    const myRent = JSON.parse(localStorage.getItem('my_rent_customer') || '[]');
    myRent.push(rentedCar);
    localStorage.setItem('my_rent_customer', JSON.stringify(myRent));
  
    // Save to manager_rent
    const managerRent = JSON.parse(localStorage.getItem('manager_rent') || '[]');
    managerRent.push(rentedCar);
    localStorage.setItem('manager_rent', JSON.stringify(managerRent));
  
    alert('Car sent to rent request!');
}}