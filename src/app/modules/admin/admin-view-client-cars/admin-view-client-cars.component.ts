import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car.model';
import { User } from '../../../models/users.model';


@Component({
  selector: 'app-admin-view-client-cars',
  templateUrl: './admin-view-client-cars.component.html',
  styleUrls: ['./admin-view-client-cars.component.css'],
  standalone:false
})
export class AdminViewClientCarsComponent implements OnInit {
  clients: User[] = [];
  selectedClientId: number | null = null;
  clientCars: Car[]|any = [];
  currentUser: any;

  ngOnInit(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    this.clients = users.filter((u: User) => u.role === 'client');
  }

 
  onSelectClient(): void {
    const allCars = JSON.parse(localStorage.getItem('cars') || '[]');
    this.clientCars = allCars.filter(((car: { id: any; })=> car.id === this.selectedClientId));
  }
}
