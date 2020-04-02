import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDetailsModel } from 'src/app/models/userdetails.model';
import { StoragePermissionService } from 'src/app/services/storagePermission/storage-permission.service';
import { ClientService } from 'src/app/services/client/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  //links: any[] = ['Your Personal Information', 'Your Cart', 'Your Favorites'];
  links: any[] = [
    {
      title: 'My personal information',
      url: 'personal-information'
    },
    {
      title: 'My Cart',
      url: '#'
    },
    {
      title: 'My Favorites',
      url: '#'
    },
    {
      title: 'Change my Password',
      url: 'reset-password'
    }
  ];
  loading: boolean;
  profileDetails: UserDetailsModel;
  error: boolean = false;
  errorProfile: boolean = false;
  constructor(
    private storageService: StoragePermissionService,
    private authService: AuthService,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.clientService.getProfileDetails().subscribe(
      (response: any) => {
        if (response.code === 200) {
          this.error = false;
          this.profileDetails = response.data;
          this.loading = false;
          this.router.navigate(['my-account', 'personal-information']);
        } else if (response.code != 200) {
          this.error = true;
          this.loading = false;
        }
      },
      err => {
        this.error = true;
        this.loading = false;
      }
    );
  }

  reloadInfo() {
    this.ngOnInit();
  }
}
