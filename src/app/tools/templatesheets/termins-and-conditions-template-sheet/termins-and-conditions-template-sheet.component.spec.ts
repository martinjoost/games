import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminsAndConditionsTemplateSheetComponent } from './termins-and-conditions-template-sheet.component';

describe('TerminsAndConditionsTemplateSheetComponent', () => {
  let component: TerminsAndConditionsTemplateSheetComponent;
  let fixture: ComponentFixture<TerminsAndConditionsTemplateSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminsAndConditionsTemplateSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminsAndConditionsTemplateSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
