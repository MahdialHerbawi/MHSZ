import { Component } from '@angular/core';
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
export class CustomerDashboardComponent {
  car: string = '';
  yers: string = '';
  pricerent: string = '';
  role: string = '';
  activeTab: 'rent' | 'purchase' = 'rent'; // <- Default tab when page loads
  
  

  purchasableCars = [
    {
      name: 'BMW 3 Series',
      clientName: 'Client C',
      askingPrice: 30000,
      image: 'assets/images/bmw.jpg'
    },
    {
      name: 'Audi A4',
      clientName: 'Client D',
      askingPrice: 32000,
      image: 'assets/images/audi.jpg'
    }
    // Add more purchasable cars here
  ];

  constructor(private local:LocalStorageService,private router: Router
  ) {
   
  }
  rentalCars = [
    
   {
      name: 'Toyota Corolla',
      clientName: 'Client A',
      dailyRate: 50,
      image: 'assets/images/toyota.jpg'
    },
    {
      name: 'Honda Civic',
      clientName: 'Client B',
      dailyRate: 55,
      image: 'assets/images/honda.jpg'
    },
    {
      name: 'Toyota Corolla1',
      clientName: 'Client A',
      dailyRate: 50,
      image: 'assets/images/toyota.jpg'
    },
    {
      name: 'Honda Civic2',
      clientName: 'Client B',
      dailyRate: 55,
      image: 'assets/images/honda.jpg'
    }

    // Add more cars here
  ];
  
  switchTab(tab: 'rent' | 'purchase') {
    this.activeTab = tab;
  }

  confirmRent(car: any) {
    this.local.setItem('selectedRentCar', car);
    this.router.navigate(['/customer/my-rentals']);
  }

  confirmPurchase(car: any) {
    this.local.setItem('selectedPurchaseCar', car);
    this.router.navigate(['/customer/my-purchases']);
  }
}