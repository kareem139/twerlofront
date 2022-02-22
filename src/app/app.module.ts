import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { PaymentlistComponent } from './admin/payment/paymentlist/paymentlist.component';
import { PaymentaddComponent } from './admin/payment/paymentadd/paymentadd.component';
import { HeaderComponent } from './sharedcomponent/header/header.component';
import { FooterComponent } from './sharedcomponent/footer/footer.component';
import { SidebarComponent } from './sharedcomponent/sidebar/sidebar.component';
import { CompanyComponent } from './admin/company/company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './middleware/auth.interceptor';
import { PaymentcountComponent } from './admin/payment/paymentcount/paymentcount.component';
import { MerchantpaymentComponent } from './admin/merchant/merchantpayment/merchantpayment.component';
import { TransactionsComponent } from './admin/merchant/transactions/transactions.component';
import { AddtransactionComponent } from './admin/merchant/addtransaction/addtransaction.component';
import { ListtransactionComponent } from './admin/merchant/listtransaction/listtransaction.component';
import { TransactionstatusComponent } from './admin/merchant/transactionstatus/transactionstatus.component';
import { FiltersComponent } from './admin/merchant/filters/filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { PaymentactionsComponent } from './admin/payment/paymentactions/paymentactions.component';
import { LeftsidebarComponent } from './sharedcomponent/leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from './sharedcomponent/rightsidebar/rightsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaymentlistComponent,
    PaymentaddComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CompanyComponent,
    PaymentcountComponent,
    MerchantpaymentComponent,
    TransactionsComponent,
    AddtransactionComponent,
    ListtransactionComponent,
    TransactionstatusComponent,
    FiltersComponent,
    PaymentactionsComponent,
    LeftsidebarComponent,
    RightsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatStepperModule,
    DataTablesModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
