import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './middleware/auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"account/login",pathMatch:"full"},
  {path:"incident",
loadChildren:()=>import('./admin/incident/addincident/addincident.module').then(m=>m.AddincidentModule)
},
{path:"user",
loadChildren:()=>import('./admin/user/adduser/adduser.module').then(m=>m.AdduserModule)
},
  {path:"account",children:[
    {path:"login",component:LoginComponent}
  ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
