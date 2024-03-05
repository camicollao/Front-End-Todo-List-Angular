import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './pages/index/tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtondetailsComponent } from './components/buttondetails/buttondetails.component';
import { TaskdetailsComponent } from './pages/taskdetails/taskdetails.component';
import { TaskeditComponent } from './taskedit/taskedit.component';


@NgModule({
  declarations: [
    TasksComponent,
    ButtondetailsComponent,
    TaskdetailsComponent,
    TaskeditComponent,  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule],
  exports:[TasksComponent]
})
export class TasksModule { }
