import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseRentalCarsComponent } from './browse-rental-cars.component';

describe('BrowseRentalCarsComponent', () => {
  let component: BrowseRentalCarsComponent;
  let fixture: ComponentFixture<BrowseRentalCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseRentalCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseRentalCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
