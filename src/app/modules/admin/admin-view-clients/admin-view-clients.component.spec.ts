import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewClientsComponent } from './admin-view-clients.component';

describe('AdminViewClientsComponent', () => {
  let component: AdminViewClientsComponent;
  let fixture: ComponentFixture<AdminViewClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminViewClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
