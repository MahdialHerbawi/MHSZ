import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';
import { User, AuthService } from '../../services/auth.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-client',
  standalone: false,
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  currentUser!: User;
    cars: Car[] = [];
    requests: Request[]|any = [];
  
    constructor(
      private authService: AuthService,
      private carService: CarService,
      
    ) {}
  
    ngOnInit(): void {
      this.currentUser = this.authService.getCurrentUser()!;
      this.loadCars();
      this.loadRequests();
    }
  
    loadCars(): void {
      this.cars = this.carService.getAllCars()
    }
  
    loadRequests(): void {
      this.requests = this.authService.getPendingClients()
        .filter(req => this.cars.some(car => car.id === req.id));
    }
}
