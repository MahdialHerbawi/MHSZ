import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone:false,
  styleUrl:'./navbar.component.scss',
})
export class NavbarComponent implements OnInit {
role:string|null=null;
  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit(): void {
    this.auth.role$.subscribe(role => {
      this.role = role;

  });}

  shouldShowNavbar(): boolean {
    const hiddenRoutes = ['/auth/login', '/auth/signup'];
    return !hiddenRoutes.includes(this.router.url);
  }

  getDashboardLink(): string {
    const role = this.getUserRole();
    if (role === 'admin') {
      return '/admin/dashboard';
    } else if (role === 'client') {
      return '/client/dashboard';
    } else if (role === 'customer') {
      return '/customer/dashboard';
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

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}