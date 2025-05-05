import { Injectable } from '@angular/core';
import { Request } from '../models/Request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private storageKey = 'carRequests';

  constructor() {}

  private getAll(): Request[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private saveAll(requests: Request[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(requests));
  }

  getRequests(): Request[] {
    return this.getAll();
  }

  addRequest(request:Request): void {
    const requests = this.getAll();
    requests.push({ ...request, id: Date.now(), status: 'pending' });
    this.saveAll(requests);
  }

  updateRequest(updated: Request): void {
    const requests = this.getAll().map(r => r.id === updated.id ? updated : r);
    this.saveAll(requests);
  }

  getRequestsByCustomer(customerId: number): Request[] {
    return this.getAll().filter(r => r.customerId === customerId);
  }

  getRequestsByCar(carId: number): Request[] {
    return this.getAll().filter(r => r.carId === carId);
  }
}
