import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PaymentcountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
