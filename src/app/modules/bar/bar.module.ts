import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { UsersModule } from '../users/users.module';
import { TasksModule } from '../tasks/tasks.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    TasksModule,
    RouterModule,
  ],
  exports:[BarComponent]
})
export class BarModule { }
