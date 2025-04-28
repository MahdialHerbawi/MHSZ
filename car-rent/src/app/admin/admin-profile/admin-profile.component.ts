import { Component } from '@angular/core';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-admin-profile',
  standalone: false,
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent {
  profileData = {
    name: '',
    email: '',
    location: '',
    phoneNumber: ''
  };

  isEditing: boolean = false;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  // Load admin profile from localStorage
  loadProfile(): void {
    const storedProfile = this.localStorageService.getItem<any>('currentUser');
    if (storedProfile) {
      this.profileData = storedProfile;
    }
  }

  // Start editing
  editProfile(): void {
    this.isEditing = true;
  }

  // Save changes
  saveProfile(): void {
    if (
      this.profileData.name.trim() === '' ||
      this.profileData.email.trim() === '' ||
      this.profileData.location.trim() === '' ||
      this.profileData.phoneNumber.trim() === ''
    ) {
      alert('Please fill all fields before saving.');
      return;
    }

    this.localStorageService.setItem('currentUser', this.profileData);
    this.isEditing = false;
    alert('Profile updated successfully!');
  }

  // Delete the profile
  deleteProfile(): void {
    if (confirm('Are you sure you want to delete your profile?')) {
      this.localStorageService.removeItem('currentUser');
      this.profileData = { name: '', email: '', location: '', phoneNumber: '' };
      this.isEditing = false;
      alert('Profile deleted.');
    }
  }
}
