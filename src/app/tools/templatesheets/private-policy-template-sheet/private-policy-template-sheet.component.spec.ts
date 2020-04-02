import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePolicyTemplateSheetComponent } from './private-policy-template-sheet.component';

describe('PrivatePolicyTemplateSheetComponent', () => {
  let component: PrivatePolicyTemplateSheetComponent;
  let fixture: ComponentFixture<PrivatePolicyTemplateSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatePolicyTemplateSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatePolicyTemplateSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
