import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentalCarComponent } from './add-rental-car.component';

describe('AddRentalCarComponent', () => {
  let component: AddRentalCarComponent;
  let fixture: ComponentFixture<AddRentalCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRentalCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRentalCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
