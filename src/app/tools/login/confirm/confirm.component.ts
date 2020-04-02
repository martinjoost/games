import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  constructor(private _bottomSheetRef: MatBottomSheetRef<ConfirmComponent>) {}

  ngOnInit(): void {}

  closeEmailSheet(): void {
    this._bottomSheetRef.dismiss();
  }
}
