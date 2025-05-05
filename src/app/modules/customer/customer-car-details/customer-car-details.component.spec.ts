import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCarDetailsComponent } from './customer-car-details.component';

describe('CustomerCarDetailsComponent', () => {
  let component: CustomerCarDetailsComponent;
  let fixture: ComponentFixture<CustomerCarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerCarDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
