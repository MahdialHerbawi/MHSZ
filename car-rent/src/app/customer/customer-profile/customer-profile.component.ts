import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-customer-profile',
  standalone: false,
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.scss'
})

export class CustomerProfileComponent implements OnInit {
  cuastmerdata:any=[]
  constructor(private router: Router ,private local:LocalStorageService) {}
  ngOnInit(): void {
    this.cuastmerdata=this.local.getItem('currentUser')
  }

}
