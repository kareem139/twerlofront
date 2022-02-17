import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';


@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

  constructor(private service:PaymentService,private router:Router) { }

  listofpayment:Array<any>=[]
  ngOnInit(): void {
    this.getAllPaymentforDay()
  }

  getAllPaymentforDay(){
    this.service.getallReq().subscribe((res:any)=>{
      this.listofpayment=res
      console.log(res);
    })
  }
}
