import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { PasswordValidator } from '../../validators/password/password-validator';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RecoveryPasswordConfirmModel } from 'src/app/models/recoverypasswordconfirm.model';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss'],
  animations: [
    trigger('isOpenRecovery', [
      transition(':enter', [
        style({
          transform: 'scale(0)',
          opacity: 0
        }),
        animate(
          '.35s ease-in',
          style({
            transform: 'scale(1)',
            opacity: 1
          })
        )
      ]),
      transition(':leave', [
        style({
          transform: 'scale(1)',
          opacity: 1
        }),
        animate(
          '.35s ease-out',
          style({
            transform: 'scale(0)',
            opacity: 0
          })
        )
      ])
    ]),
    trigger('isShowFade', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(
          '.35s ease-in',
          style({
            opacity: 1
          })
        )
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate(
          '.35s ease-out',
          style({
            opacity: 0
          })
        )
      ])
    ]),
    trigger('isTranslateX', [
      transition(':enter', [
        style({
          transform: 'translate3d(-150%,0,0)',
          opacity: 0
        }),
        animate(
          '.35s ease-in',
          style({
            transform: 'translate3d(0,0,0)',
            opacity: 1
          })
        )
      ]),
      transition(':leave', [
        style({
          transform: 'translate3d(-150%,0,0)',
          opacity: 1
        }),
        animate(
          '.35s ease-out',
          style({
            transform: 'translate3d(0,0,0)',
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class RecoveryComponent implements OnInit {
  @Output() showRecovery = new EventEmitter<boolean>();
  @Input() token: string;
  showRecoveryPassword: boolean = true;
  recoveryPasswordForm: FormGroup;
  title: string;
  isHide: boolean = true;
  loading: boolean = false;
  error: boolean = false;
  errorSamePassword: boolean;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.recoveryPasswordForm = this.formBuilder.group(
      {
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)])
      },
      {
        validator: [PasswordValidator.MatchPassword]
      }
    );
  }

  changePassword() {
    const data: RecoveryPasswordConfirmModel = {
      ...this.recoveryPasswordForm.value,
      token: this.token
    };
    if (this.recoveryPasswordForm.valid) {
      this.loading = true;
      this.authService.recoveryAccountConfirm(data).subscribe(
        resp => {
          if (resp.code === 200) {
            this._snackBar.open('Your password has been successfully changed!', 'OK', {
              duration: 2000
            });
            this.closeRecovery();
          }
        },
        err => {
          this.error = true;
          if (err.error.code === 422) {
            this.errorSamePassword = true;
            this.error = false;
          } else if (err.error.code === 400) {
            this.closeRecovery();
            this._snackBar.open('This password reset token is invalid', 'OK', {
              duration: 2000
            });
          }
          this.recoveryPasswordForm.reset();
          this.loading = false;
        }
      );
    }
  }

  closeRecovery(): void {
    this.router.navigate(['/home']);
    this.showRecovery.emit(false);
  }

  showPassword(): void {
    this.isHide = !this.isHide;
  }

  changeState($event: any): void {
    $event.preventDefault();
  }
}
