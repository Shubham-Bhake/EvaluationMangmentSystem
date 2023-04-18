import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeebacFromkCompentcyComponent } from './add-feebac-fromk-compentcy.component';

describe('AddFeebacFromkCompentcyComponent', () => {
  let component: AddFeebacFromkCompentcyComponent;
  let fixture: ComponentFixture<AddFeebacFromkCompentcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeebacFromkCompentcyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeebacFromkCompentcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
