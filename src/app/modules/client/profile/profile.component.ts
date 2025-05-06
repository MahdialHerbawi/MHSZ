import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: any;

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    this.user = currentUser ? JSON.parse(currentUser) : null;
  }

  updateProfile() {
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
    alert('Profile updated!');
  }
}
