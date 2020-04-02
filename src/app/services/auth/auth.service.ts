import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterUserModel } from 'src/app/models/registeruser.model';
import { UpdateUserModel } from 'src/app/models/updateuser.model';
import { LoginUserModel } from 'src/app/models/loginuser.model';
import { StoragePermissionService } from '../storagePermission/storage-permission.service';
import { Socialtype } from '../../enums/socialtype.enum';
import { RecoveryPasswordModel } from 'src/app/models/recoverypassword.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginResponseModel } from '../../models/loginresponse.model';
import { WindorefService } from '../window/windoref.service';
import { RecoveryPasswordConfirmModel } from 'src/app/models/recoverypasswordconfirm.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static multisite = environment;
  public isUserLoggedBehavior = new BehaviorSubject(false);
  isUserLogged = this.isUserLoggedBehavior.asObservable();
  apiUrl = environment;
  headers: any;

  constructor(
    private http: HttpClient,
    private storageService: StoragePermissionService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private winRef: WindorefService
  ) {
    if (this.storageService.isAuthenticatedByToken()) {
      this.isUserLoggedBehavior.next(true);
    } else {
      this.isUserLoggedBehavior.next(false);
    }
  }

  getToken(): string {
    return this.storageService.getToken();
  }

  getHeader() {
    this.headers = new Headers({
      Authorization: `Bearer ${this.getToken()}`,
      'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
    });
    return this.headers;
  }

  loginUser(data: LoginUserModel): Observable<any> {
    const httpOptions = {
      headers: this.getHeader()
    };
    let loginData = new FormData();
    loginData.append('username', data.username);
    loginData.append('password', data.password);
    return this.http.post<any>(`${this.apiUrl}/oauth/token`, loginData, httpOptions);
  }

  registerUser(data: RegisterUserModel): Observable<any> {
    const httpOptions = {
      headers: this.getHeader()
    };
    return this.http.post(this.apiUrl + '/api/users', data, httpOptions);
  }

  updateUser(data: UpdateUserModel): Observable<any> {
    const httpOptions = {
      headers: {
        authorization: `Bearer ${this.getToken()}`,
        'Content-Type': 'application/json; charset=utf-8',
        accept: ' application/json'
      }
    };
    return this.http.post(`${this.apiUrl}/api/users`, data, httpOptions);
  }

  logOutUser(): Observable<any> {
    this.isUserLoggedBehavior.next(false);
    const httpOptions = {
      headers: {
        'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
        Accept: 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      }
    };
    this.router.navigate(['/home']);
    return this.http.get(`${this.apiUrl}/api/users/logout`, httpOptions);
  }

  recoveryAccount(data: RecoveryPasswordModel): Observable<any> {
    const httpOptions = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }
    };
    return this.http.post(`${this.apiUrl}/api/password/recovery`, data, httpOptions);
  }

  recoveryAccountConfirm(data: RecoveryPasswordConfirmModel): Observable<any> {
    const httpOptions = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }
    };
    return this.http.post(`${this.apiUrl}/api/password/recovery/confirm`, data, httpOptions);
  }

  /**
   * get uri to redirect to social login
   * @param socialType type social to do login
   */
  socialUri(socialType: Socialtype, router: Router) {
    this.storageService.setStorage('socialLoginType', socialType);
    this.storageService.setStorage('uri', router.url);
    return this.http.get(this.apiUrl + '/auth/' + socialType, { responseType: 'text' });
  }

  /**
   * When the login is confirmed this method verify the token and start sesión
   */
  confirmSocialLogin(router: Router) {
    const urlParams = new URLSearchParams(this.winRef.getNativeWindow().location.search);
    const code = urlParams.get('code');
    const socialType = this.storageService.getStorage('socialLoginType');
    if (code && socialType) {
      let parameters = '/callback?';
      urlParams.forEach((value, key) => {
        if (parameters === '/callback?') {
          parameters = parameters + key + '=' + value;
        } else {
          parameters = parameters + '&' + key + '=' + value;
        }
      });
      this.http.get(this.apiUrl + '/auth/' + socialType + parameters).subscribe(
        result => {
          const response = JSON.parse(JSON.stringify(result));
          if (response.register) {
            this.storageService.setStorage('register', response.register);
          } else {
            this.storageService.setStorage('register', undefined);
          }
          let tokenResponse: LoginResponseModel = {
            access_token: response.user.token,
            expires_in: response.user.expiresIn,
            refresh_token: response.user.refreshToken,
            token_type: response.token_type
          };

          this.storageService.setToken(tokenResponse);
          if (socialType === Socialtype.google) {
            this.storageService.setStorageProfile(JSON.stringify(response.user.name));
          } else if (socialType === Socialtype.facebook) {
            this.storageService.setStorageProfile(JSON.stringify(response.user.name));
          }
          this.responseSocialLogin(router);
        },
        err => {
          // console.log(err.error.message);
          this.responseSocialLogin(router);
        }
      );
    }
  }

  /**
   * When the user confirm the login with any social network from a mobile device this method is called
   */
  responseSocialLogin(router: Router) {
    if (this.storageService.getProfile()) {
      this.isUserLoggedBehavior.next(true); // update global menu
      if (this.storageService.getStorage('register') !== 'undefined' && this.storageService.getStorage('register')) {
        this.router.navigate(['my-account/personal-information']);
      } else {
        if (this.storageService.getStorage('uri') !== 'undefined' && this.storageService.getStorage('uri')) {
          const uri = this.storageService.getStorage('uri');
          const url = unescape(uri).split('?');
          if (url.length === 2) {
            router.navigate([url[0]], { queryParams: JSON.parse('{"' + decodeURI(url[1].replace(/&/g, '","').replace(/=/g, '":"')) + '"}') });
          } else {
            router.navigate([uri]);
          }
        } else {
          router.navigate(['home']);
        }
      }
    } else {
      this._snackBar.open('Error logging in, try again', 'OK', {
        duration: 2000
      });
    }
  }
}
