import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone:false
})
export class NavbarComponent implements OnInit {
  // currentUser: any;

  // constructor(private router: Router) {}

  // ngOnInit(): void {
  //   const userData = localStorage.getItem('currentUser');
  //   if (userData) {
  //     this.currentUser = JSON.parse(userData);
  //   }
  // }

  // logout() {
  //   localStorage.removeItem('currentUser');
  //   this.router.navigate(['/login']);
  // }

  role:string|null=null;
  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit(): void {
    const currentUser = this.auth.getCurrentUser();
    this.role = currentUser ? currentUser.role : null;
    }

  shouldShowNavbar(): boolean {
    const hiddenRoutes = ['/auth/login', '/auth/register', '/forbidden'];
    return !hiddenRoutes.includes(this.router.url);
  }

  getDashboardLink(): string {
    const role = this.getUserRole();
    if (role === 'admin') {
      return '/admin';
    } else if (role === 'client') {
      return '/client';
    } else if (role === 'customer') {
      return '/customer';
    }
    return '/';
  }
  

  isLoggedIn(): boolean {
    console.log("logged in ", this.role)
    
    return !!this.role;
  }

  getUserRole(): string | null {
   
    return this.role;
   
  }

  mobileMenuActive: boolean = false;

toggleMobileMenu(): void {
  this.mobileMenuActive = !this.mobileMenuActive;
}

closeMobileMenu(): void {
  this.mobileMenuActive = false;
}

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
