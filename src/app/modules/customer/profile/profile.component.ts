import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'customer-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  
  @ViewChild('fileInput') fileInput!: ElementRef;
  
  isEditMode = false;
  showPassword = false;
  tempProfilePicture: string | null = null;
  
  user: any = {
    name: 'Test',
    email: '',
    password: '',
    age: null,
    phonenumber: '',
    profilePicture: null
  };

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser && currentUser.username) {
      this.user = { ...currentUser };
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      this.tempProfilePicture = null;
    }
  }

  cancelEdit() {
    this.loadUserData(); // Reload original data
    this.isEditMode = false;
    this.tempProfilePicture = null;
  }

  updateProfile() {
    // Update the picture if changed
    if (this.tempProfilePicture) {
      this.user.profilePicture = this.tempProfilePicture;
    }

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Find and update the user
    const updatedUsers = users.map((u: any) => 
      u.username === this.user.username ? this.user : u
    );

    // If user didn't exist in array, add them
    if (!updatedUsers.some((u: any) => u.username === this.user.username)) {
      updatedUsers.push(this.user);
    }

    // Save updates
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    
    this.isEditMode = false;
    
    // Show success message
    alert('Profile updated successfully!');
    console.log('Profile updated:', this.user);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.tempProfilePicture = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
