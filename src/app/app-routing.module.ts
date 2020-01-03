import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { CurdComponent } from './components/curd/curd.component';
import { FireComponent } from './components/fire/fire.component';


const routes: Routes = [
  {path:'users', component: UsersComponent},
  {path:'curd', component: CurdComponent},
  {path:'fire', component: FireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
