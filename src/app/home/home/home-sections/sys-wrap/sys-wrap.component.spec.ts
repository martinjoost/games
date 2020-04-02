import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysWrapComponent } from './sys-wrap.component';

describe('SysWrapComponent', () => {
  let component: SysWrapComponent;
  let fixture: ComponentFixture<SysWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
