import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLottoSliderComponent } from './home-lotto-slider.component';

describe('HomeLottoSliderComponent', () => {
  let component: HomeLottoSliderComponent;
  let fixture: ComponentFixture<HomeLottoSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLottoSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLottoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
