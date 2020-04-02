import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminsOfServiceTemplateSheetComponent } from './terms-of-service-template-sheet.component';

describe('TerminsOfServiceTemplateSheetComponent', () => {
  let component: TerminsOfServiceTemplateSheetComponent;
  let fixture: ComponentFixture<TerminsOfServiceTemplateSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TerminsOfServiceTemplateSheetComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminsOfServiceTemplateSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
