import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private storageKey = 'cars';

  getAllCars(): Car[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getCarById(id: number): Car | undefined {
    return this.getAllCars().find(car => car.id === id);
  }

  getCarsByOwner(owner: string): Car[] {
    return this.getAllCars().filter(car => car.owner === owner);
  }

  addCar(car: Car): void {
    const cars = this.getAllCars();
    cars.push(car);
    localStorage.setItem(this.storageKey, JSON.stringify(cars));
  }

  updateCar(updatedCar: Car): void {
    const cars = this.getAllCars().map(car => car.id === updatedCar.id ? updatedCar : car);
    localStorage.setItem(this.storageKey, JSON.stringify(cars));
  }

  deleteCar(id: number): void {
    const cars = this.getAllCars().filter(car => car.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(cars));
  }
}
