import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchantpayment',
  templateUrl: './merchantpayment.component.html',
  styleUrls: ['./merchantpayment.component.css']
})
export class MerchantpaymentComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  data:any=[
    {id:112345678912345,to:"Mac",rider:12345678912345,amount:50000,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:312345678912345,to:"Marsol",rider:12345678912345 ,amount:300,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:412345678912345,to:"Mac",rider:12345678912345,amount:200,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:512345678912345,to:"Marsol",rider:12345678912345,amount:400,status:3,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:612345678912345,to:"Mac",rider:12345678912345,amount:500,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:712345678912345,to:"Mac",rider:12345678912345,amount:1000,status:3,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:112345678912345,to:"Mac",rider:12345678912345,amount:500,status:3,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:312345678912345,to:"Marsol",rider:12345678912345 ,amount:3000,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:412345678912345,to:"Mac",rider:12345678912345,amount:200,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:512345678912345,to:"Marsol",rider:12345678912345,amount:400,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:612345678912345,to:"Mac",rider:12345678912345,amount:500,status:3,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:712345678912345,to:"Mac",rider:12345678912345,amount:900,status:3,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:112345678912345,to:"Mac",rider:12345678912345,amount:500,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:312345678912345,to:"Marsol",rider:12345678912345 ,amount:300,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:412345678912345,to:"Mac",rider:12345678912345,amount:200,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:512345678912345,to:"Marsol",rider:12345678912345,amount:400,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:612345678912345,to:"Mac",rider:12345678912345,amount:500,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:712345678912345,to:"Mac",rider:12345678912345,amount:900,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:112345678912345,to:"Mac",rider:12345678912345,amount:500,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:312345678912345,to:"Marsol",rider:12345678912345 ,amount:300,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:412345678912345,to:"Mac",rider:12345678912345,amount:200,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:512345678912345,to:"Marsol",rider:12345678912345,amount:400,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:612345678912345,to:"Mac",rider:12345678912345,amount:500,status:1,sender:12345678912345,from:"EgyptPost",type:"Pos"},
    {id:712345678912345,to:"Mac",rider:12345678912345,amount:900,status:2,sender:12345678912345,from:"EgyptPost",type:"Pos"},
  ];
  constructor() { }

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
}
