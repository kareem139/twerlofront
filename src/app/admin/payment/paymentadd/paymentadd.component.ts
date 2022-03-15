import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { PaymentService } from '../../services/payment.service';
import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-paymentadd',
  templateUrl: './paymentadd.component.html',
  styleUrls: ['./paymentadd.component.css']
})
export class PaymentaddComponent implements OnInit,OnChanges {

  constructor(private service:PaymentService,private router:Router,private companyservice:CompanyService,
    private http:HttpClient) { }
  dtOptions: DataTables.Settings = {
    scrollY:"80vh",
    scrollCollapse:true,
    paging:false
  };
  filter = new FormGroup({
    customerId: new FormControl(''),
    supplierId: new FormControl(''),
    from: new FormControl(moment().format('YYYY-MM-DD')),
    to: new FormControl(moment().format('YYYY-MM-DD')),
    statusNum:new FormControl('')
  });

  pagination = new FormGroup({
    PageNumber: new FormControl(1),
    PageSize: new FormControl(100),
    RouteValue: new FormControl(''),
   
  });
  companyLst:any;
  supplierLst:any;

  data:any;
  listofcompanies:Array<any>=[]
  random:string="";
  selectedcounter=0;
  ngOnInit(): void {
   
    this.service.test.next(this.filter)
    this.dtOptions = {
      scrollY:"60vh",
      scrollX:true,
    scrollCollapse:true,
    paging:false,
    processing:false,
    info:false,
    

    search:false,
   searching:false,
   columnDefs:[
     {
       targets:[0,1,2,3,4,5,6,7,8],
       orderable:false,
       searchable:false
     }
   ]

    };

  
  //   this.http.get('http://jsonplaceholder.typicode.com/posts')
  //   .subscribe(posts => {
  //     this.data = posts;
  // });
    // this.getallcodeReq();
    // this.checkontransId();
    this.getAllCompanyList();
    this.getAllSupplierList();
    this.getwithsearch();
    
  }
  ngOnChanges():void{
   // console.log(this.filter.value)
  }
  selected:any;
  selectedTransaction:Array<string>=[]
  calculateselect(e:any){
    console.log("================")
    this.selected=0;
    e.classList.toggle("select");
    var all=document.getElementsByClassName("checkrow");
    console.log("this",e.parentElement?.parentElement?.querySelector("#transactionId")?.innerHTML);

    var tranid=e.parentElement?.parentElement?.querySelector("#transactionId")?.innerHTML;
    this.selectedTransaction.push(tranid);
    for (let index = 0; index < all.length; index++) {
      const element = all[index];
      if (element.classList.contains("select")) {
        this.selected++;
      }
      console.log(this.selected)
    }
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

  
  changecounter(e:any){
    var row=document.getElementById("k")?.parentElement?.parentElement;
    var ele=e.target.parentElement?.parentElement;
    console.log(ele);
    
    ele.classList.toggleClass("selectrow")
    this.selectedcounter+=1;
  }

  getwithsearch(){
    this.service.test.next(this.filter);
    
   // console.log(this.filter.value)
   // console.log(this.pagination.controls["PageNumber"].value)
    this.service.getpaymentbysearch(this.pagination,this.filter).subscribe((res:any)=>{
      this.data=res.data;
     // console.log(res)
     // console.log(this.filter.value);
    },(err)=>{
      console.log(this.filter.value);
    })
  }

  getAllCompanyList()
  {
    this.service.getallcompanyList().subscribe((res:any)=>{
      console.log(res)
      if (res.succeeded) {
        this.companyLst=res.data 
      }
        
    })
  }

  getAllSupplierList()
  {
    this.service.getSuppliers().subscribe((res:any)=>{

        this.supplierLst=res     
    })
  }

  changeStatus(statusnum:any){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.changePaymentStatusReq(this.selectedTransaction,statusnum).subscribe((res:any)=>{
          console.log("result",res);
          
        //  this.getAllCompanyList();
        //  this.getAllSupplierList();
          this.getwithsearch();
          this.selected=0;
          this.selectedTransaction=[]
          Swal.fire('Saved!', '', 'success')
         
          
        },(err)=>{
          this.selected=0;
          this.selectedTransaction=[]
          Swal.fire('HaveError!', '', 'error')
        })
        
      }
      else if (result.isDenied) {
       // this.getAllCompanyList();
       // this.getAllSupplierList();
        this.getwithsearch();
        this.selected=0;
        this.selectedTransaction=[]
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    

  }
}
