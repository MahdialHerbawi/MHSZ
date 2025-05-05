import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewClientCarsComponent } from './admin-view-client-cars.component';

describe('AdminViewClientCarsComponent', () => {
  let component: AdminViewClientCarsComponent;
  let fixture: ComponentFixture<AdminViewClientCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminViewClientCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewClientCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
