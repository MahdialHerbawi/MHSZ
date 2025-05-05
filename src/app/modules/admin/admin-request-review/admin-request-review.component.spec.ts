import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestReviewComponent } from './admin-request-review.component';

describe('AdminRequestReviewComponent', () => {
  let component: AdminRequestReviewComponent;
  let fixture: ComponentFixture<AdminRequestReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminRequestReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
