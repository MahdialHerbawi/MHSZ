import { Component } from '@angular/core';
import { Request } from '../../../models/Request.model';
@Component({
  selector: 'app-client-request-review',
  standalone: false,
  templateUrl: './client-request-review.component.html',
  styleUrl: './client-request-review.component.css'
})
export class ClientRequestReviewComponent {
  requests: Request[] = [];

  ngOnInit(): void {
    const data = localStorage.getItem('requests');
    this.requests = data ? JSON.parse(data) : [];
  }

  updateStatus(requestId: number, newStatus: 'approved' | 'rejected') {
    this.requests = this.requests.map(request => {
      if (request.id === requestId) {
        return { ...request, status: newStatus };
      }
      return request;
    });

    localStorage.setItem('requests', JSON.stringify(this.requests));
    alert(`Request ${newStatus}`);
  }
}
