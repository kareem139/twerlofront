import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { PaymentService } from '../../services/payment.service';
import * as moment from 'moment';
@Component({
  selector: 'app-allpayment',
  templateUrl: './allpayment.component.html',
  styleUrls: ['./allpayment.component.css']
})
export class AllpaymentComponent implements OnInit {

  constructor(private service:PaymentService) { }
  dtOptions: DataTables.Settings = {
    scrollY:"80vh",
    scrollCollapse:true,
    paging:false
  };
  filter = new FormGroup({
    customerId: new FormControl(''),
    supplierId: new FormControl(''),
    from: new FormControl(moment().format('YYYY-MM-DD')),
    to: new FormControl(''),
    statusNum:new FormControl('')
  });

  pagination = new FormGroup({
    PageNumber: new FormControl(1),
    PageSize: new FormControl(10),
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
    
    tabIndex:1,
    search:false,
   searching:false,
   
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
  
  changecounter(e:any){
    document.getElementById("k")?.parentElement?.parentElement;
    var ele=e.target.parentElement?.parentElement;
    ele.classList.toggleClass("selectrow")
    this.selectedcounter+=1;
  }

  getwithsearch(){
    this.service.test.next(this.filter)
    this.service.getpaymentbysearch(this.pagination,this.filter).subscribe((res:any)=>{
      this.data=res.data;
      console.log(res)
      console.log(this.filter.value);
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
