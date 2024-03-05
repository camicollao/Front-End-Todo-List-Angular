import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BarModule } from '../bar/bar.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BarModule
  ]
})
export class HomeModule { }
