import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/middleware/auth.guard';
import { IncidentDetailsComponent } from '../incident-details/incident-details.component';
import { IncidentlstComponent } from '../incidentlst/incidentlst.component';
import { AddincidentComponent } from './addincident.component';

const routes: Routes = [
  {
    path:'add',
    component:AddincidentComponent,canActivate:[AuthGuard],data:{permittedRoles:['ADMIN']}
  },
  {
    path:"list",
    component:IncidentlstComponent
  }
  ,
  {
    path:"details",
    component:IncidentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddincidentRoutingModule { }
