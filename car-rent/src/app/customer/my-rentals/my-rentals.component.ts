import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-my-rentals',
  standalone: false,
  templateUrl: './my-rentals.component.html',
  styleUrl: './my-rentals.component.scss'
})
export class MyRentalsComponent implements OnInit {
  myrent:any=[]
constructor(private localStorageService:LocalStorageService){

}
cars: any[] = [];

ngOnInit() {
  const stored = localStorage.getItem('my_rent_customer');
  this.cars = stored ? JSON.parse(stored) : [];
}

 
}

