import { Component } from '@angular/core';
import { User, AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
 pendingClients: User[] = [];
  currentUser: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.currentUser = JSON.parse(userData);
    const users = this.authService.getUsers();
    this.pendingClients = users.filter(u => u.role === 'client' && u.status === 'pending');
  }
}

ngAfterViewInit(): void {
  const chartBars = document.querySelectorAll('.chart-bar[data-animate]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  chartBars.forEach((bar) => observer.observe(bar));
}
}
