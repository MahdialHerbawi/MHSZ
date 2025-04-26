import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePurchaseCarsComponent } from './browse-purchase-cars.component';

describe('BrowsePurchaseCarsComponent', () => {
  let component: BrowsePurchaseCarsComponent;
  let fixture: ComponentFixture<BrowsePurchaseCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowsePurchaseCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsePurchaseCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
