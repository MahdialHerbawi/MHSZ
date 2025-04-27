import { Component } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-my-rentals',
  standalone: false,
  templateUrl: './my-rentals.component.html',
  styleUrl: './my-rentals.component.scss'
})
export class MyRentalsComponent {
constructor(private localStorageService:LocalStorageService){
 const car =this.localStorageService.getItem<any>('selectedRentCar');
}


}

