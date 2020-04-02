import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinBoxComponent } from './skin-box.component';

describe('SkinBoxComponent', () => {
  let component: SkinBoxComponent;
  let fixture: ComponentFixture<SkinBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkinBoxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
