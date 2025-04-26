import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurchaseCarComponent } from './add-purchase-car.component';

describe('AddPurchaseCarComponent', () => {
  let component: AddPurchaseCarComponent;
  let fixture: ComponentFixture<AddPurchaseCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPurchaseCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPurchaseCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
