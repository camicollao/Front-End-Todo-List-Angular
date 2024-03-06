import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule } from './modules/users/users.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarModule } from './modules/bar/bar.module';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    BarModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
