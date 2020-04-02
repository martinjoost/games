import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntroSliderComponent } from './home-intro-slider.component';

describe('HomeIntroSliderComponent', () => {
  let component: HomeIntroSliderComponent;
  let fixture: ComponentFixture<HomeIntroSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIntroSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIntroSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
