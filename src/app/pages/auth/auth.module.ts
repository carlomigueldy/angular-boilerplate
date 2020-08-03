import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgotPasswordComponent],
  imports: [CommonModule, AuthRoutingModule, MatButtonModule],
})
export class AuthModule {}
