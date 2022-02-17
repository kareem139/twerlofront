import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-paymentcount',
  templateUrl: './paymentcount.component.html',
  styleUrls: ['./paymentcount.component.css']
})
export class PaymentcountComponent implements OnInit {

  constructor(private service:PaymentService) { }
  listofpayment:Array<any>=[]
  paymentcount=0
  paymentamount=0
  ngOnInit(): void {
    this.getAllPaymentforDay()
  }

  getAllPaymentforDay(){
    this.service.getallReq().subscribe((res:any)=>{
      this.listofpayment=res;
      this.paymentcount=this.listofpayment.length
      this.listofpayment.forEach(ele=>{
        this.paymentamount+=ele.paymentAmount
      })
      console.log(res);
    })
  }

}
