import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/admin/services/payment.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  constructor(private paymentservice:PaymentService,private rout:ActivatedRoute) { }
  filter = new FormGroup({
    customerId: new FormControl(''),
    supplierId: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
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
  ngOnInit(): void {
   setInterval(()=>{
     this.filter=this.paymentservice.datanav;
   // console.log(this.paymentservice.datanav.value.supplierId)
    this.getsupplierBalances();
    this.getsuppliername();
    this.getcustomername();
   },2000) ;
 
   
  }
  
  getsupplierBalances(){
    this.paymentservice.getsupplierBalancesReq(this.filter).subscribe((res:any)=>{
      this.balances=res;
    })
  }
  allsupplier:any;
  getsuppliername(){
    this.paymentservice.getSuppliers().subscribe((res:any)=>{
       this.allsupplier=res;
      console.log(res)
      this.allsupplier.forEach((element:any) => {
        if (element.id==this.filter.controls['supplierId'].value) {
          this.suppliername=element.nameAr
        }
      });
    });
  }
allcustomers:any;
  getcustomername(){
    this.paymentservice.getallcompanyList().subscribe((res:any)=>{
       this.allcustomers=res.data;
      console.log(res)
      this.allcustomers.forEach((element:any) => {
        if (element.id==this.filter.controls['customerId'].value) {
          this.customername=element.companyAr
        }
      });
    });
  }
}
