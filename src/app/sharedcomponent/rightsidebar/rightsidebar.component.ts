import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/admin/services/payment.service';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.css']
})
export class RightsidebarComponent implements OnInit,OnDestroy {

  constructor(private paymentservice:PaymentService,private rout:Router) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  filter = new FormGroup({
    customerId: new FormControl(''),
    supplierId: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
    statusNum: new FormControl(''),
  });
  balances:any;
  balancesKeys:any;
  currentUrl="";
  sub:any;
  ngOnInit(): void {

    this.sub=this.paymentservice.test.subscribe((res)=>{
      this.currentUrl=this.rout.url;
      console.log("MY URL",this.currentUrl);
           this.getCustomerBalancesBysupplier(res);

    })
    // setInterval(()=>{
    //   this.currentUrl=this.rout.url;
    // },1000)
    // console.log(this.rout.url)
    // this.filter=this.paymentservice.datanav;
    // setInterval(()=>{
    //   if(this.paymentservice.fetchdata){
    //     this.filter=this.paymentservice.datanav;
    //     console.log(this.paymentservice.datanav.value.supplierId)
    //     this.paymentservice.fetchdata=false;
    //   }

    // },1000) ;
 
  }
  getCustomerBalancesBysupplier(e:any){
    this.paymentservice.getCustomerBalancesBySupplierReq(e).subscribe((res:any)=>{
      console.log("cusbalance",res);
      
      this.balances=res;
      this.balancesKeys=Object.keys(this.balances);
      console.log(this.balances["ماكدونالدز"]);
    })
  }
}
