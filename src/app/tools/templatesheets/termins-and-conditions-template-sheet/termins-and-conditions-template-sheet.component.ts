import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-termins-and-conditions-template-sheet',
  templateUrl: './termins-and-conditions-template-sheet.component.html',
  styleUrls: ['./termins-and-conditions-template-sheet.component.scss']
})
export class TerminsAndConditionsTemplateSheetComponent implements OnInit {
  constructor(private _bottomSheetRef: MatBottomSheetRef<TerminsAndConditionsTemplateSheetComponent>) {}

  closeTerminsAndConditions(): void {
    this._bottomSheetRef.dismiss();
  }

  ngOnInit(): void {}
}
