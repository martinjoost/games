import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from '../../../validators/password/password-validator';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  resetPass: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildResetPass();
  }

  buildResetPass() {
    this.resetPass = this._formBuilder.group(
      {
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)])
      },
      {
        validator: [PasswordValidator.MatchPassword]
      }
    );
  }
}
