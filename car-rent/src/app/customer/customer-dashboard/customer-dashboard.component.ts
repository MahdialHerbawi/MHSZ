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
  activeTab: 'rent' | 'purchase' = 'rent'; // <- Default tab when page loads
  
  

  

  constructor(private local:LocalStorageService,private router: Router
  )  {
   
  }
  ngOnInit(): void {
   this.rentalCars= this.local.datacar()
   this.purchasableCars=this.local.datacar()
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
}