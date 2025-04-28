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
  //cuastmerdata:any=[]
  profileData = {
    name: '',
    email: '',
    number: '',
    role:'',
    profilePicture:'',
    age:''
  };

  isEditing: boolean = false;
  constructor(private router: Router ,private localStorageService:LocalStorageService) {}
  ngOnInit(): void {
    this.loadProfile();
   // this.cuastmerdata=this.localStorageService.getItem('currentUser')
    
  }
  loadProfile(): void {
    const storedProfile = this.localStorageService.getItem<any>('currentUser');
    if (storedProfile) {
      this.profileData = storedProfile;
    }
  }

  // Switch to edit mode
  editProfile(): void {
    this.isEditing = true;
  }

  // Save the edited profile to localStorage
  saveProfile(): void {
    this.localStorageService.setItem('currentUser', this.profileData);
    this.isEditing = false;
    alert('Profile saved successfully!');
  }

  // Delete the profile from localStorage
  deleteProfile(): void {
    this.localStorageService.removeItem('currentUser');
    this.profileData = { name: '', email: '', number: '',role:'',age:'',profilePicture:'' };
    alert('Profile deleted successfully!');
  }

}
