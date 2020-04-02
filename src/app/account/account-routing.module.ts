import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './account-pages/register/register.component';
import { ChangePassComponent } from './account-pages/change-pass/change-pass.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'personal-information',
        component: RegisterComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'reset-password',
        component: ChangePassComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
