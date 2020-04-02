import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoragePermissionService } from 'src/app/services/storagePermission/storage-permission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent implements OnInit {
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<LogoutDialogComponent>,
    private _snackBar: MatSnackBar,
    private permissionService: StoragePermissionService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  logout() {
    this.loading = true;
    this.authService.logOutUser().subscribe(
      (response: any) => {
        if (response.code === 200) {
          this.loading = false;
          this.permissionService.clearData();
          this._snackBar.open('Logged Out', 'OK', {
            duration: 2000
          });
          this.dialogRef.close();
        }
        if (response.code != 200) {
          this.loading = false;
          this.permissionService.clearData();
          this.dialogRef.close();
        }
      },
      err => {
        this.permissionService.clearData();
        this.loading = false;
        this.dialogRef.close();
        this.router.navigate(['/home']);
      }
    );
  }
}
