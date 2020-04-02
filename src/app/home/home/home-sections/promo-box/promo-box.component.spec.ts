import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoBoxComponent } from './promo-box.component';

describe('PromoBoxComponent', () => {
  let component: PromoBoxComponent;
  let fixture: ComponentFixture<PromoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
