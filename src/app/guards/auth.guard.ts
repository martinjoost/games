import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StoragePermissionService } from '../services/storagePermission/storage-permission.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storagePermission: StoragePermissionService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.storagePermission.isAuthenticatedByToken()) {
      return true;
    } else {
      // navigate to login page
      this.router.navigate(['/home']);
      // you can save redirect url so after authing we can move them back to the page they requested
      return false;
    }
  }
}
