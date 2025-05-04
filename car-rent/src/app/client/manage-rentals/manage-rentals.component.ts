import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-manage-rentals',
  standalone: false,
  templateUrl: './manage-rentals.component.html',
  styleUrl: './manage-rentals.component.scss'
})
export class ManageRentalsComponent implements OnInit {
  cars: any[] = []; 
 
  myrent:any=[]
  constructor(private localStorageService:LocalStorageService){
  
  }
    
  
  /*  approveCompany() {
      this.myrent.status = 'approved';
      this.saveToLocalStorage();
      this.saveToLocalStoragecar()
      console.log("app")
    }
    rejectCompany() {
      this.myrent.status = 'rejected';
      this.saveToLocalStorage();
      this.saveToLocalStoragecar()
      console.log("a")
  
    }
    saveToLocalStorage(): void {
     
      localStorage.setItem('selectedRentCar', JSON.stringify(this.myrent));
      
    }
  saveToLocalStoragecar(): void {
     
    localStorage.setItem('car', JSON.stringify(this.myrent));
    
  }*/
/*loadCars(): void {
  const storedCars = localStorage.getItem('car');
  this.cars = storedCars ? JSON.parse(storedCars) : [];
}

updateStatus(carId: number, newStatus: string): void {
  const index = this.cars.findIndex(car => car.id === carId);
  if (index !== -1 && this.cars[index].status === 'available') {
    this.cars[index].status = newStatus;
    // Update in local array
    const updatedCars = [...this.cars];
      
    // Save to both localStorage keys
    localStorage.setItem('car', JSON.stringify(updatedCars));
    localStorage.setItem('selectedRentCar', JSON.stringify(updatedCars)); 
    this.loadCars(); // Refresh UI
  }
}*/


ngOnInit() {
  const stored = localStorage.getItem('manager_rent');
  this.cars = stored ? JSON.parse(stored) : [];
}

updateStatus(carId: number, newStatus: string) {
  this.cars = this.cars.map(car => {
    if (car.id === carId) return { ...car, status: newStatus };
    return car;
  });
  localStorage.setItem('manager_rent', JSON.stringify(this.cars));

  // Update my_rent_customer
  let myRent = JSON.parse(localStorage.getItem('my_rent_customer') || '[]');
  myRent = myRent.map((car: { id: number; }) => {
    if (car.id === carId) return { ...car, status: newStatus };
    return car;
  });
  localStorage.setItem('my_rent_customer', JSON.stringify(myRent));

  // Update dashboard_customer
  let dashboard = JSON.parse(localStorage.getItem('dashboard_customer') || '[]');
  const exists = dashboard.find((car: { id: number; }) => car.id === carId);
  if (exists) {
    dashboard = dashboard.map((car: { id: number; }) => {
      if (car.id === carId) return { ...car, status: newStatus };
      return car;
    });
  } else {
    const car = this.cars.find(c => c.id === carId);
    if (car) dashboard.push({ ...car, status: newStatus });
  }
  localStorage.setItem('dashboard_customer', JSON.stringify(dashboard));
}

}
