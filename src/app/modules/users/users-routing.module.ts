import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/index/users.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [{
  'path': '',
  component: LoginComponent
},{
  'path': ':id',
  component: UsersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
