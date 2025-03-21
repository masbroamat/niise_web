import { Routes } from '@angular/router';
import { ApiComponent } from './components/api/api.component';
import { DlcComponent } from './components/dlc/dlc.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SetNewPasswordComponent } from './components/set-new-password/set-new-password.component';
import { SettingsComponent } from './components/settings/settings.component';
import { Signup1Component } from './components/signup1/signup1.component';
import { Signup2Component } from './components/signup2/signup2.component';
import { Signup3Component } from './components/signup3/signup3.component';
import { VerificationForgotPasswordComponent } from './components/verification-forgot-password/verification-forgot-password.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dlc',
    component: DlcComponent,
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'setnewpassword',
    component: SetNewPasswordComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'signup1',
    component: Signup1Component,
  },
  {
    path: 'signup2',
    component: Signup2Component,
  },
  {
    path: 'signup3',
    component: Signup3Component,
  },
  {
    path: 'verificationforgotpassword',
    component: VerificationForgotPasswordComponent,
  },
  {
    path: 'api',
    component: ApiComponent,
  },
];
