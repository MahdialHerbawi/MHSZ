import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;

  isEditMode: boolean = false;
  showPassword: boolean = false;

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    this.user = currentUser ? JSON.parse(currentUser) : null;
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  updateProfile() {
    if (!this.user) {
      alert('No user data to update.');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Update user in the users array
    users = users.map((u: any) => {
      if (u.username === this.user.username) {
        return this.user;
      }
      return u;
    });

    // Update storage
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    alert('Profile updated successfully!');
    console.log('Profile updated:', this.user);
    this.isEditMode = false;
  }

  cancelEdit(): void {
    this.isEditMode = false;
    // Optionally reset form if you want to discard changes
  }
}