import { MaterialModule } from './../../modules/material/material.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule, FlexLayoutModule],
})
export class AppModule {}
