import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacklistfromclientComponent } from './feedbacklistfromclient.component';

describe('FeedbacklistfromclientComponent', () => {
  let component: FeedbacklistfromclientComponent;
  let fixture: ComponentFixture<FeedbacklistfromclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacklistfromclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacklistfromclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
