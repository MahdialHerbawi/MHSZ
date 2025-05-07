import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) {}
  currentYear: number = new Date().getFullYear();

  showFooter(): boolean {
    const hiddenRoutes = ['/auth/login', '/auth/register', '/forbidden', '/admin'];
    return !hiddenRoutes.includes(this.router.url);
  }
}
