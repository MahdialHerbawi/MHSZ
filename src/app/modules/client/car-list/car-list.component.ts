import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  standalone:false
})
export class CarListComponent implements OnInit {
  clientCars: any[] = [];
  currentUser: any;
  editMode: boolean = false;
  carData: any = {};
  editingCarId: number | null = null;

  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
      this.loadClientCars();
    }
  }

  loadClientCars() {
    const allCars = JSON.parse(localStorage.getItem('cars') || '[]');
    this.clientCars = allCars.filter(((car: { id: any; })=> car.id === this.currentUser.id));
  }

  editCar(car: any) {
    this.editMode = true;
    this.editingCarId = car.id;
    this.carData = { ...car };
  }

  updateCar() {
    const allCars = JSON.parse(localStorage.getItem('cars') || '[]');
    const index = allCars.findIndex((c: { id: number | null; }) => c.id === this.editingCarId);

    if (index !== -1) {
      allCars[index] = { ...this.carData, id: this.editingCarId, clientId: this.currentUser.id };
      localStorage.setItem('cars', JSON.stringify(allCars));
      this.loadClientCars();
      this.cancelEdit();
    }
  }

  deleteCar(id: number) {
    let allCars = JSON.parse(localStorage.getItem('cars') || '[]');
    allCars = allCars.filter((c: { id: number; }) => c.id !== id);
    localStorage.setItem('cars', JSON.stringify(allCars));
    this.loadClientCars();
  }

  cancelEdit() {
    this.editMode = false;
    this.editingCarId = null;
    this.carData = {};
  }
}
