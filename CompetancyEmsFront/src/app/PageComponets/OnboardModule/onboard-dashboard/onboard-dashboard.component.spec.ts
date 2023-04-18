import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardDashboardComponent } from './onboard-dashboard.component';

describe('OnboardDashboardComponent', () => {
  let component: OnboardDashboardComponent;
  let fixture: ComponentFixture<OnboardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
