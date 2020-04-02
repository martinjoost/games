import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSliderComponent } from './standard-slider.component';

describe('StandardSliderComponent', () => {
  let component: StandardSliderComponent;
  let fixture: ComponentFixture<StandardSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
