import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './modules/guards/login.guard';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [{
  'path': 'tasks',
  loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule),
  canActivate:[loginGuard]
},{
  'path': 'users',
  loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
},{
  'path': '',
  component: HomeComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
