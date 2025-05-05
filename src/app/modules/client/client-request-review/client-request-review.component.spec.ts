import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRequestReviewComponent } from './client-request-review.component';

describe('ClientRequestReviewComponent', () => {
  let component: ClientRequestReviewComponent;
  let fixture: ComponentFixture<ClientRequestReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientRequestReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientRequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
