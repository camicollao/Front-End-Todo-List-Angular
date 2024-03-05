import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule } from './modules/users/users.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarModule } from './modules/bar/bar.module';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    BarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
