import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-merchantpayment',
  templateUrl: './merchantpayment.component.html',
  styleUrls: ['./merchantpayment.component.css']
})
export class MerchantpaymentComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  // data:any=[
  //   {id:112345678912345,to:"Mac",rider:12345678912345,amount:50000,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:312345678912345,to:"Marsol",rider:12345678912345 ,amount:300,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:412345678912345,to:"Mac",rider:12345678912345,amount:200,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:512345678912345,to:"Marsol",rider:12345678912345,amount:400,status:3,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:612345678912345,to:"Mac",rider:12345678912345,amount:500,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:712345678912345,to:"Mac",rider:12345678912345,amount:1000,status:3,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:112345678912345,to:"Mac",rider:12345678912345,amount:500,status:3,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:312345678912345,to:"Marsol",rider:12345678912345 ,amount:3000,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:412345678912345,to:"Mac",rider:12345678912345,amount:200,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:512345678912345,to:"Marsol",rider:12345678912345,amount:400,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:612345678912345,to:"Mac",rider:12345678912345,amount:500,status:3,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:712345678912345,to:"Mac",rider:12345678912345,amount:900,status:3,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:112345678912345,to:"Mac",rider:12345678912345,amount:500,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:312345678912345,to:"Marsol",rider:12345678912345 ,amount:300,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:412345678912345,to:"Mac",rider:12345678912345,amount:200,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:512345678912345,to:"Marsol",rider:12345678912345,amount:400,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:612345678912345,to:"Mac",rider:12345678912345,amount:500,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:712345678912345,to:"Mac",rider:12345678912345,amount:900,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:112345678912345,to:"Mac",rider:12345678912345,amount:500,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:312345678912345,to:"Marsol",rider:12345678912345 ,amount:300,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:412345678912345,to:"Mac",rider:12345678912345,amount:200,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:512345678912345,to:"Marsol",rider:12345678912345,amount:400,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:612345678912345,to:"Mac",rider:12345678912345,amount:500,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  //   {id:712345678912345,to:"Mac",rider:12345678912345,amount:900,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  // ];

  data:any;
  listofcompanies:Array<any>=[]
  selectedcounter=0;
  constructor(private service:PaymentService) { }

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
