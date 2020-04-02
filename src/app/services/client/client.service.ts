import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { StoragePermissionService } from '../storagePermission/storage-permission.service';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiUrl = environment;

  constructor(private http: HttpClient, private storageService: StoragePermissionService) {}

  getToken(): string {
    return this.storageService.getToken();
  }
  getCountries() {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      }
    };
    return this.http.get(`${this.apiUrl}/api/countries`, httpOptions);
  }

  getStates() {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      }
    };
    return this.http.get(`${this.apiUrl}/api/states`, httpOptions);
  }

  getProfileDetails(): Observable<any> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      }
    };
    return this.http.get(`${this.apiUrl}/api/users/details`, httpOptions);
  }
}
