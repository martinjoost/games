import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialLottoSliderComponent } from './special-lotto-slider.component';

describe('SpecialLottoSliderComponent', () => {
  let component: SpecialLottoSliderComponent;
  let fixture: ComponentFixture<SpecialLottoSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialLottoSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialLottoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
