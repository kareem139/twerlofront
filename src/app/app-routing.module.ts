import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './admin/company/company.component';
import { LoginComponent } from './admin/login/login.component';
import { PaymentaddComponent } from './admin/payment/paymentadd/paymentadd.component';
import { PaymentlistComponent } from './admin/payment/paymentlist/paymentlist.component';
import { AuthGuard } from './middleware/auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"account/login",pathMatch:"full"},
  {path:"account",children:[
    {path:"login",component:LoginComponent}
  ]},
  {path:"company",component:CompanyComponent,children:[
    {path:"payment",children:[
      {path:"add",component:PaymentaddComponent},
      {path:"list",component:PaymentlistComponent}
    ]}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
