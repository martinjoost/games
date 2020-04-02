import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { LoginResponseModel } from 'src/app/models/loginresponse.model';

const PREFIXPROFILE = 'wt__t7._0';
const PREFIXTOKEN = 'tzZ_00122yYm_2';
const PREFIXRECOVERYTOKEN = 'jdJkw-_2129DDd2__';

@Injectable({
  providedIn: 'root'
})
export class StoragePermissionService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  site = environment;
  userToken: string;

  setStorageProfile(data) {
    return localStorage.setItem(`${PREFIXPROFILE}`, data);
  }

  setToken(response: LoginResponseModel) {
    let today = new Date();
    today.setSeconds(response.expires_in);
    localStorage.setItem('expires', today.getTime().toString());
    return localStorage.setItem(`${PREFIXTOKEN}`, response.access_token);
  }

  setRecoveryToken(response) {
    return localStorage.setItem(`${PREFIXRECOVERYTOKEN}`, response);
  }

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(`${PREFIXTOKEN}`);
    }
  }

  getProfile() {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem(`${PREFIXPROFILE}`));
    }
  }

  setStorage(name, data) {
    return localStorage.setItem(this.site + name, data);
  }

  getStorage(name) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.site + name);
    }
  }

  clearData() {
    localStorage.clear();
  }

  isAuthenticatedByToken(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const expire = Number(localStorage.getItem('expires'));
      const toExpired = new Date();
      toExpired.setTime(expire);
      if (toExpired > new Date() && this.getToken().length > 10) {
        return true;
      } else {
        return false;
      }
    }
  }
}
