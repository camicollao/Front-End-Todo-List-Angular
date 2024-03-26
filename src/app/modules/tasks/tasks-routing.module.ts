import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './pages/index/tasks.component';
import { TaskdetailsComponent } from './pages/taskdetails/taskdetails.component';
import { TaskeditComponent } from './pages/taskedit/taskedit.component';

const routes: Routes = [{
  'path': '',
  component: TasksComponent
},{
  'path':':id',
  component: TaskdetailsComponent
},{
  'path': 'edit/:id',
  component: TaskeditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
