import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from '../userlist/userlist.component';
import { AdduserComponent } from './adduser.component';

const routes: Routes = [
  {path: 'list',component:UserlistComponent},
  {path:'add',component:AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdduserRoutingModule { }
