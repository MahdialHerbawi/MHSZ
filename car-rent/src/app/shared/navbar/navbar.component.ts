import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone:false,
  styleUrl:'./navbar.component.scss'
})
export class NavbarComponent implements OnInit {
role:string|null=null;
  constructor(private router: Router,private auth:AuthService) {}
  ngOnInit(): void {
    this.auth.role$.subscribe(role => {
      this.role = role;

  });}

  shouldShowNavbar(): boolean {
    // List of routes where navbar should be hidden
    const hiddenRoutes = ['/auth/login', '/auth/signup'];
    return !hiddenRoutes.includes(this.router.url);
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