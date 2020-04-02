import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { StoragePermissionService } from 'src/app/services/storagePermission/storage-permission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private storage: StoragePermissionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.authService.confirmSocialLogin(this.router);
  }
}
