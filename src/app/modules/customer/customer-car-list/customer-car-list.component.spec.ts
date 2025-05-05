import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCarListComponent } from './customer-car-list.component';

describe('CustomerCarListComponent', () => {
  let component: CustomerCarListComponent;
  let fixture: ComponentFixture<CustomerCarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerCarListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
