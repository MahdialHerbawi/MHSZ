import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-my-purchases',
  standalone: false,
  templateUrl: './my-purchases.component.html',
  styleUrl: './my-purchases.component.scss'
})
export class MyPurchasesComponent implements OnInit {
  
  purchasescar: any = [];
  constructor(private localStorage:LocalStorageService){

  }
  ngOnInit(): void {
   this.purchasescar=this.localStorage.getItem('selectedPurchaseCar')
  }
  }

