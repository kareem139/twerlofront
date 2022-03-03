import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentService } from 'src/app/admin/services/payment.service';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.css']
})
export class RightsidebarComponent implements OnInit {

  constructor(private paymentservice:PaymentService) { }

  filter = new FormGroup({
    customerId: new FormControl(''),
    supplierId: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
  });
  balances:any;
  balancesKeys:any;
  ngOnInit(): void {
    setInterval(()=>{
      this.filter=this.paymentservice.datanav;
     console.log(this.paymentservice.datanav.value.supplierId)
     this.getCustomerBalancesBysupplier();
    },1000) ;
 
  }
  getCustomerBalancesBysupplier(){
    this.paymentservice.getCustomerBalancesBySupplierReq(this.filter).subscribe((res:any)=>{
      this.balances=res;
      this.balancesKeys=Object.keys(this.balances);
      console.log(this.balances["ماكدونالدز"]);
    })
  }
}
