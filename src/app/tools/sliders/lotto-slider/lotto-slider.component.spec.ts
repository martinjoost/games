import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoSliderComponent } from './lotto-slider.component';

describe('LottoSliderComponent', () => {
  let component: LottoSliderComponent;
  let fixture: ComponentFixture<LottoSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
