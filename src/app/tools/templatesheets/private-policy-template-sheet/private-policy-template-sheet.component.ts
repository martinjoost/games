import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-private-policy-template-sheet',
  templateUrl: './private-policy-template-sheet.component.html',
  styleUrls: ['./private-policy-template-sheet.component.scss']
})
export class PrivatePolicyTemplateSheetComponent implements OnInit {
  constructor(private _bottomSheetRef: MatBottomSheetRef<PrivatePolicyTemplateSheetComponent>) {}

  closeTerminsAndConditions(): void {
    this._bottomSheetRef.dismiss();
  }

  ngOnInit(): void {}
}
