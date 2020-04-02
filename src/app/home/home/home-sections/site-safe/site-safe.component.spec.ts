import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSafeComponent } from './site-safe.component';

describe('SiteSafeComponent', () => {
  let component: SiteSafeComponent;
  let fixture: ComponentFixture<SiteSafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
