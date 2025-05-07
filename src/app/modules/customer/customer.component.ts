import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  currentUser: any;

  constructor(private router: Router) {}

  
  
  featuredCars = [
    {
      id: 1,
      make: 'Porsche',
      model: '911 Turbo S',
      year: 2023,
      image: '/porsche-911.webp',
      engine: '3.8L Twin-Turbo Flat-6',
      transmission: '8-Speed PDK',
      seats: 4,
      pricePerDay: 399
    },
    {
      id: 2,
      make: 'Mercedes-Benz',
      model: 'AMG GT',
      year: 2023,
      image: '/mercedes-amg.jpg',
      engine: '4.0L Twin-Turbo V8',
      transmission: '9-Speed Automatic',
      seats: 2,
      pricePerDay: 349
    },
    {
      id: 3,
      make: 'Audi',
      model: 'R8 V10',
      year: 2023,
      image: '/Black_Audi_Spyder.webp',
      engine: '5.2L V10',
      transmission: '7-Speed Automatic',
      seats: 2,
      pricePerDay: 379
    }
  ];

  availableCars = [
    {
      id: 4,
      make: 'BMW',
      model: 'M8 Competition',
      year: 2023,
      image: '/bmw-m8.jpg',
      fuelType: 'Premium',
      mileage: 1200,
      type: 'Coupe',
      pricePerDay: 329,
      featured: true
    },
    {
      id: 5,
      make: 'Lamborghini',
      model: 'Huracán EVO',
      year: 2023,
      image: '/lambo-huracan.jpg',
      fuelType: 'Premium',
      mileage: 800,
      type: 'Coupe',
      pricePerDay: 499,
      featured: false
    },
    {
      id: 6,
      make: 'Ferrari',
      model: 'Roma',
      year: 2023,
      image: '/ferrari-roma.webp',
      fuelType: 'Premium',
      mileage: 1500,
      type: 'Coupe',
      pricePerDay: 429,
      featured: true
    },
    {
      id: 7,
      make: 'McLaren',
      model: '720S',
      year: 2023,
      image: '/mclaren-720s.webp',
      fuelType: 'Premium',
      mileage: 2000,
      type: 'Coupe',
      pricePerDay: 449,
      featured: false
    }
  ];

  

  ngOnInit(): void {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.currentUser = JSON.parse(userData);
    }
  }

  scrollCarousel(direction: number) {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.scrollBy({ left: direction * 300, behavior: 'smooth' });
    }
  }

  // viewCarDetails(carId: number) {
  //   // Navigate to car details page
  //   console.log('Viewing car:', carId);
  // }

  navigateToCarList() {
    // Navigate to full car list page
    this.router.navigate(['/customer/car-list']);
    console.log('Navigating to car list');
  }
}
