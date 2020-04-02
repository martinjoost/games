import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailValidator } from '../../validators/email/email-validator';
import { PasswordValidator } from '../../validators/password/password-validator';
import { trigger, style, animate, transition } from '@angular/animations';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from '../../services/client/client.service';
import { TerminsAndConditionsTemplateSheetComponent } from '../templatesheets/termins-and-conditions-template-sheet/termins-and-conditions-template-sheet.component';
import { PrivatePolicyTemplateSheetComponent } from '../templatesheets/private-policy-template-sheet/private-policy-template-sheet.component';
import { Socialtype } from '../../enums/socialtype.enum';
import { StoragePermissionService } from '../../services/storagePermission/storage-permission.service';
import { Router } from '@angular/router';
import { LoginUserModel } from '../../models/loginuser.model';
import { RegisterUserModel } from '../../models/registeruser.model';
import { Country } from 'src/app/models/userdetails.model';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { LoginResponseModel } from 'src/app/models/loginresponse.model';
import { RecoveryPasswordModel } from 'src/app/models/recoverypassword.model';
import { TerminsOfServiceTemplateSheetComponent } from '../templatesheets/terms-of-service-template-sheet/terms-of-service-template-sheet.component';
import { WindorefService } from '../../services/window/windoref.service';
import { ConfirmComponent } from './confirm/confirm.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('isOpenLogin', [
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
export class LoginComponent implements OnInit {
  @Input() state: boolean;
  @Output() showLogin = new EventEmitter<boolean>();
  showSignInUp: boolean = true;
  loginForm: FormGroup; //LOGIN FORM
  registerForm: FormGroup; //REGISTER FORM
  title: string;
  showForm: boolean = true;
  signInUpText: string;
  signInUpState: boolean;
  isHide: boolean = true;
  forgotPass: boolean = false;
  isStep: boolean = false;
  loading: boolean = false;
  error: boolean = false;
  errorMailExist: boolean;
  errorFormInvalid: boolean = false;
  EMAIL_REGEXP: any = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  countries: Country[] = [];
  filteredCountries: Observable<Country[]>;
  errorCredentials: boolean;
  errorRecovery: boolean;
  constructor(
    private _sheet: MatBottomSheet,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private clientService: ClientService,
    private storageService: StoragePermissionService,
    private router: Router,
    private winRef: WindorefService
  ) {}

  ngOnInit(): void {
    this.clientService.getCountries().subscribe((countries: any) => (this.countries = countries.data));
    this.buildForm();
    this.filterCountry();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.email, Validators.required, Validators.pattern(this.EMAIL_REGEXP)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    this.registerForm = this.formBuilder.group(
      {
        email: new FormControl('', [Validators.email, Validators.required, Validators.pattern(this.EMAIL_REGEXP)]),
        cemail: new FormControl(''),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        password_confirmation: new FormControl(''),
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]),
        last_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]+')]),
        phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(15)]),
        country: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]+')])
      },
      {
        validator: [EmailValidator.MatchEmail, PasswordValidator.MatchPassword]
      }
    );
  }

  loginGoogle($event: any) {
    $event.preventDefault();
    this.loading = true;
    this.authService.socialUri(Socialtype.google, this.router).subscribe(
      result => {
        this.loading = false;
        this.winRef.getNativeWindow().location.href = result;
      },
      err => {
        this._snackBar.open('Error logging in, try again', 'OK', {
          duration: 2000
        });
        this.loading = false;
      }
    );
  }

  loginFacebook($event: any) {
    $event.preventDefault();
    this.loading = true;
    this.authService.socialUri(Socialtype.facebook, this.router).subscribe(
      result => {
        this.loading = false;
        this.winRef.getNativeWindow().location.href = result;
      },
      err => {
        this._snackBar.open('Error logging in, try again', 'OK', {
          duration: 2000
        });
        this.loading = false;
      }
    );
  }
  loginUser() {
    this.loading = true;
    if (this.loginForm.valid) {
      const dataUser: LoginUserModel = { ...this.loginForm.value };
      this.authService.loginUser(dataUser).subscribe(
        (response: LoginResponseModel) => {
          if (response.access_token) {
            this.authService.isUserLoggedBehavior.next(true);
            this.storageService.setToken(response);
            this.storageService.setStorageProfile(JSON.stringify(dataUser.username));
            this.showLogin.emit(false);
            this._snackBar.open('Hello!, Welcome back', 'OK', {
              duration: 2000
            });
            this.loading = false;
          }
          if (response.error === 'invalid_credentials') {
            this.errorCredentials = true;
            this.loading = false;
          }
        },
        err => {
          console.log(err);
          this.error = true;
          this.loading = false;
        }
      );
    } else {
      this.error = false;
      this.errorFormInvalid = true;
      this.loading = false;
    }
  }

  registerUser(): void {
    this.loading = true;
    const userData: RegisterUserModel = {
      ...this.registerForm.value,
      country: this.countries.find(c => c.name == this.registerForm.get('country').value).identifier
    };
    if (this.registerForm.valid) {
      this.authService.registerUser(userData).subscribe(
        response => {
          if (response.code === 201) {
            this._sheet.open(ConfirmComponent);
            this.showLogin.emit(false);
            this.loading = false;
          } else {
            this._snackBar.open(response.error.message, 'OK', {
              duration: 2000
            });
            this.loading = false;
            return;
          }
        },
        err => {
          if (err.error.error.email[0] === 'The email has already been taken.') {
            this.errorMailExist = true;
            this.loading = false;
            this.isStep = !this.isStep;
          } else {
            this.error = true;
            this.loading = false;
          }
        }
      );
    } else {
      return;
      this.loading = false;
      this.errorFormInvalid = true;
    }
  }

  //First step all fields required
  changeStep($event: any) {
    if (
      this.registerForm.controls['email'].invalid ||
      this.registerForm.controls['cemail'].invalid ||
      this.registerForm.controls['name'].invalid ||
      this.registerForm.controls['last_name'].invalid ||
      this.registerForm.controls['password'].invalid ||
      this.registerForm.controls['password_confirmation'].invalid
    ) {
      this.error = true;
    } else {
      $event.preventDefault();
      this.error = false;
      this.isStep = !this.isStep;
    }
  }

  get fcontrols() {
    return this.loginForm.controls;
  }

  get passwordInput() {
    return this.loginForm.get('password');
  }

  get setTitle() {
    return this.state ? (this.title = 'LOGIN.PLACEHOLDER.WELCOMEBACK') : (this.title = 'LOGIN.PLACEHOLDER.WELCOMESINGUP');
  }

  closeSignInUp(): void {
    this.showLogin.emit(false);
  }

  showPassword(): void {
    this.isHide = !this.isHide;
  }

  changeState($event: any): void {
    $event.preventDefault();
    this.state = !this.state;
  }

  isForgotPass($event: any): void {
    $event.preventDefault();
    this.forgotPass = !this.forgotPass;
    this.errorRecovery = false;
  }

  recoveryAccount(): void {
    if (this.loginForm.controls['username'].valid) {
      this.loading = true;
      const userData: RecoveryPasswordModel = { email: this.loginForm.get('username').value };
      this.authService.recoveryAccount(userData).subscribe(
        response => {
          if (response.data.token) {
            this.closeSignInUp();
            const recoveryToken = response.data.token;
            this.storageService.setRecoveryToken(recoveryToken);
            this._snackBar.open('Check your email', 'OK', {
              duration: 2000
            });
            this.loading = false;
          }
          this.loading = false;
        },
        err => {
          if (err.error.code === 422) {
            this._snackBar.open('The selected email is invalid.', 'OK', {
              duration: 2000
            });
            this.loading = false;
          }
          this.errorRecovery = true;
          this.loading = false;
        }
      );
    }
  }

  //COUNTRY AUTOCOMPLETE
  filterCountry() {
    this.filteredCountries = this.registerForm.get('country').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: Country | string): Country[] {
    if (value && typeof value == 'object') {
      const filterValue = value.name.toLowerCase();
      return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
    }
    if (value && typeof value == 'string') {
      const filterValue = value.toLowerCase();
      return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
    }
    if (value == '') {
      return this.countries;
    }
  }

  openTerminsAndPolicy(typeOfSheet: number) {
    //1: Private Policy
    //2: Termins and Conditions
    //3: Terms and Service
    if (typeOfSheet === 1) {
      this._sheet.open(PrivatePolicyTemplateSheetComponent);
    }
    if (typeOfSheet === 2) {
      this._sheet.open(TerminsAndConditionsTemplateSheetComponent);
    }
    if (typeOfSheet === 3) {
      this._sheet.open(TerminsOfServiceTemplateSheetComponent);
    }
  }
}
