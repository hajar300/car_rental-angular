import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashborldComponent } from './admin-dashborld.component';

describe('AdminDashborldComponent', () => {
  let component: AdminDashborldComponent;
  let fixture: ComponentFixture<AdminDashborldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashborldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashborldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
