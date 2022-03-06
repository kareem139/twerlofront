import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';

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
    from: new FormControl(''),
    to: new FormControl(''),
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
  calculateselect(e:any){
    console.log("================")
    this.selected=0;
    e.classList.toggle("select");
    var all=document.getElementsByClassName("checkrow");
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

    console.log(this.filter.value)
    console.log(this.pagination.controls["PageNumber"].value)
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


}
