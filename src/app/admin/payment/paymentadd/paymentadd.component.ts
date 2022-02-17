import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { PaymentService } from '../../services/payment.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-paymentadd',
  templateUrl: './paymentadd.component.html',
  styleUrls: ['./paymentadd.component.css']
})
export class PaymentaddComponent implements OnInit {

  constructor(private service:PaymentService,private router:Router,private companyservice:CompanyService) { }

  listofcompanies:Array<any>=[]
  random:string="";

  ngOnInit(): void {
    this.getallcodeReq();
    this.checkontransId()
    
  }

    checkontransId(){
      for (let index = 0; index < 2; index++) {
        let id=this.uuid();
       this.service.checkontranIdReq(id).subscribe((res:any)=>{
         if (res.data==null) {
           this.random=id;
         }

       },err=>{
         console.log(err);
         
       })
      }
    }

   uuid() {  
    var uuidValue = "", k, randomValue;  
    for (k = 0; k < 32;k++) {  
      randomValue = Math.random() * 16 | 0;  
    
      if (k == 8 || k == 12 || k == 16 || k == 20) {  
        uuidValue += "-"  
      }  
      uuidValue += (k == 12 ? 4 : (k == 16 ? (randomValue & 3 | 8) : randomValue)).toString(16);  
    }  
    return uuidValue;  
  }  

  getallcodeReq(){
    this.companyservice.GetAllCodeReq().subscribe((res:any)=>{
      if (res.succeeded) {
        this.listofcompanies=res.data;
      } 
    })
  }


  add(data:any){
    console.log(data.value);
    console.log(data.value.transactionId);
    this.service.addReq(data.value).subscribe((res:any)=>{
      if (res.succeeded) {
        console.log("done");
        Swal.fire({
          title: 'هل تريد تأكيد عمليه الدفع',
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: 'تأكيد',
          denyButtonText: `الغاء`,
        }).then((result) => {
          let tranId=res.data.transactionId
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
           
            var today = new Date();
            var date = today.getFullYear()+(today.getMonth()+1)+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()+"Z";
            var dateTime = date+'T'+time;
            console.log(res.data.transactionId+"    "+"=====this=====");
            console.log(today.toISOString())
            console.log(dateTime.toString());
            
            let confirmform={
              transactionId:tranId,
              paymentTime:today.toISOString(),
              branchName:"219 TEST-Post Office-Test",
              paymentMethod:"POS"
            }
            console.log(confirmform);
            
            this.service.confirmpaymentReq(confirmform).subscribe((res:any)=>{
              if (res.succeeded) {
                data.reset({})
                Swal.fire(' العمليه تمت بنجاح', '', 'success')
                
              }
            })
            
          } else if (result.isDenied) {
            this.service.cancelpaymentReq(tranId).subscribe((res:any)=>{
              if (res.succeeded) {
                data.reset({})
                Swal.fire('تم الغاء عمليه الدفع', '', 'info')
                
              }
            })
            
          }
        })
        
      }
      console.log(res);
      //this.router.navigate(['payment/list'])
    },err=>{
      console.log(err);
      
    })
  }

}
