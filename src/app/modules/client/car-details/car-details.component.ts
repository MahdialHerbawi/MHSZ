import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../../models/car.model';
import { CarService } from '../../../services/car.service';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrl:'car-details.component.css',
  standalone:false
})
export class CarDetailsComponent implements OnInit {
  car: Car | undefined;

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.car = this.carService.getCarById(id);
  }
}
