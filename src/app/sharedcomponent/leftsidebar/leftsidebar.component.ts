import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PaymentService } from 'src/app/admin/services/payment.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit ,OnDestroy{

  constructor(private paymentservice:PaymentService,private rout:Router) { }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
  filter = new FormGroup({
    customerId: new FormControl(''),
    supplierId: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
    statusNum: new FormControl(''),
  });
  // {
  //   "total": 1600,
  //   "today": 0,
  //   "lastWeek": 1600,
  //   "lastMonth": 1600,
  //   "pending": 0,
  //   "done": 1600,
  //   "canceled": 0,
  //   "error": 0
  // }
  balances:any;
  suppliername:any;
  customername:any;
 subscription:any;
  ngOnInit(): void {
    this.subscription=
    this.paymentservice.test.subscribe((res:any)=>{
     
      this.getsupplierBalances(res, this.rout.url);
     // this.getsuppliername(res);
     // this.getcustomername(res);
     // console.log(res);
      
    });
   // this.filter=this.paymentservice.datanav;
   setInterval(()=>{
   //  this.filter=this.paymentservice.datanav;
   // console.log(this.paymentservice.datanav.value.supplierId)
  //  this.getsupplierBalances();
  //  this.getsuppliername();
  //  this.getcustomername();
    //   if(this.paymentservice.fetchdata){
    //     this.filter=this.paymentservice.datanav;
    //     console.log(this.paymentservice.datanav.value.supplierId)
    //     this.getsupplierBalances();
    // this.getsuppliername();
    // this.getcustomername();
    // //this.paymentservice.fetchdata=false;
    // }
   },1000) ;
 
   
  }
  
  getsupplierBalances(e:any,url:any){
    this.paymentservice.getsupplierBalancesReq(e,url).subscribe((res:any)=>{
      this.balances=res;
    })
  }
  allsupplier:any;
  getsuppliername(e:any){
    this.paymentservice.getSuppliers().subscribe((res:any)=>{
       this.allsupplier=res;
      console.log(res)
      this.allsupplier.forEach((element:any) => {
        if (element.id==e.controls['supplierId'].value) {
          this.suppliername=element.nameAr
        }
      });
    });
  }
allcustomers:any;
  getcustomername(e:any){
    this.paymentservice.getallcompanyList().subscribe((res:any)=>{
       this.allcustomers=res.data;
      console.log(res)
      this.allcustomers.forEach((element:any) => {
        if (element.id==e.controls['customerId'].value) {
          this.customername=element.companyAr
        }
      });
    });
  }
}
