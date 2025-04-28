import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-manage-rentals',
  standalone: false,
  templateUrl: './manage-rentals.component.html',
  styleUrl: './manage-rentals.component.scss'
})
export class ManageRentalsComponent implements OnInit {
  myrent:any=[]
  constructor(private localStorageService:LocalStorageService){
  
  }
    ngOnInit(): void {
     this.myrent =this.localStorageService.getItem('selectedRentCar');
    }
  
  
}
