import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './admin/company/company.component';
import { LoginComponent } from './admin/login/login.component';
import { AddtransactionComponent } from './admin/merchant/addtransaction/addtransaction.component';
import { ListtransactionComponent } from './admin/merchant/listtransaction/listtransaction.component';
import { MerchantpaymentComponent } from './admin/merchant/merchantpayment/merchantpayment.component';
import { TransactionsComponent } from './admin/merchant/transactions/transactions.component';
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
    ]},
    {path:"merchant",children:[
      {path:"payments",component:MerchantpaymentComponent},
      {path:"listtransaction",component:ListtransactionComponent},
      {path:"addtransaction",component:AddtransactionComponent},
      {path:"transactions",component:TransactionsComponent},
    ]},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
