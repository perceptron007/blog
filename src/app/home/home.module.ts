import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../lib/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HomeComponent,
    MaterialModule],
  declarations: [HomeComponent]
})
export class HomeModule { }
