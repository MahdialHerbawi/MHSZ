import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-manage-purchases',
  standalone: false,
  templateUrl: './manage-purchases.component.html',
  styleUrl: './manage-purchases.component.scss'
})
export class ManagePurchasesComponent implements OnInit {
purchasescar: any = [];
  constructor(private localStorage:LocalStorageService){

  }
  ngOnInit(): void {
   this.purchasescar=this.localStorage.getItem('selectedPurchaseCar')
  }
}
