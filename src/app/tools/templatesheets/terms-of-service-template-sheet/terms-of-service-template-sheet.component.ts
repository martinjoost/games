import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-terms-of-service-template-sheet',
  templateUrl: './terms-of-service-template-sheet.component.html',
  styleUrls: ['./terms-of-service-template-sheet.component.scss']
})
export class TerminsOfServiceTemplateSheetComponent implements OnInit {
  constructor(private _bottomSheetRef: MatBottomSheetRef<TerminsOfServiceTemplateSheetComponent>) {}

  closeTerminsAndConditions(): void {
    this._bottomSheetRef.dismiss();
  }

  ngOnInit(): void {}
}
