import { Component } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-client-profile',
  standalone: false,
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.scss'
})
export class ClientProfileComponent {
clientdata:any=[]
  profileData = {
    name: '',
    email: '',
    location: '',
    number: '',
    profilePicture:''
  };

  isEditing: boolean = false;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    // Load profile from localStorage if available
    this.loadProfile();
   // this.clientdata=this.localStorageService.getItem('currentUser')
  }

  loadProfile(): void {
    const storedProfile = this.localStorageService.getItem<any>('currentUser');
    if (storedProfile) {
      this.profileData = storedProfile;
    }
  }

  editProfile(): void {
    this.isEditing = true;
  }

  saveProfile(): void {
    this.localStorageService.setItem('currentUser', this.profileData);
    this.isEditing = false;
    alert('Profile saved successfully!');
  }

  deleteProfile(): void {
    this.localStorageService.removeItem('currentUser');
    this.profileData = { name: '', email: '', location: '', number: '' ,profilePicture:''};
    alert('Profile deleted successfully!');
  }
}
