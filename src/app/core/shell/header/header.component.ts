import { Component, OnInit, Input } from '@angular/core';
import { SystemService } from '../../../services/system/system.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoragePermissionService } from 'src/app/services/storagePermission/storage-permission.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from 'src/app/tools/dialogs/logout-dialog/logout-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() fixed: boolean = false;
  @Input() set: string;
  @Input() headerBgFx: boolean = false;
  @Input() logoText: boolean = false;
  setSystem: number = 0;
  @Input() sys: boolean;
  subsSystem: any;
  systems: any = [];
  system: string;
  alt: string;
  showLogin: boolean;
  showRecovery: boolean;
  signInUp: boolean;
  isAuthenticatedByToken: boolean;
  subscription: Subscription;
  profileDetails: any;
  passwordResetToken: string;
  logoSpecialDay: string;

  constructor(
    protected getSys: SystemService,
    private permissionService: StoragePermissionService,
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(resp => {
      if (resp.token) {
        this.passwordResetToken = resp.token;
        if (this.passwordResetToken.length > 10) {
          this.showRecovery = true;
        }
      }
    });
    this.subscription = this.authService.isUserLogged.subscribe((isLogged: boolean) => {
      if (isLogged === true) {
        this.profileDetails = this.permissionService.getProfile();
        this.isAuthenticatedByToken = true;
      } else {
        this.isAuthenticatedByToken = false;
      }
    });
    this.systemSet();
  }
  systemSet() {
    let currentSys = this.sys ? 1 : 0;
    this.subsSystem = this.systems = this.getSys.getSettings();
    this.system = this.systems[currentSys].system;
    this.alt = this.systems[currentSys].title;
  }

  isLogin(e: boolean): void {
    this.showLogin = true;
    e ? (this.signInUp = true) : (this.signInUp = false);
  }

  openLogoutDialog() {
    this.dialog.open(LogoutDialogComponent);
  }

  ngOnDestroy() {
    // this.subsSystem.unsuscribe();
  }
  account() {
    console.log('my-account');
    this.router.navigate(['/my-account']);
  }
}
