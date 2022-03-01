import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchantpayment',
  templateUrl: './merchantpayment.component.html',
  styleUrls: ['./merchantpayment.component.css']
})
export class MerchantpaymentComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  data:any=[
    {id:2,from:"EgyptPost",rider:"احمد مصطفي السيد",amount:500},
    {id:3,from:"QNB",rider:" مصطفي السيد",amount:300},
    {id:4,from:"EgyptPost",rider:"احمد  السيد",amount:200},
    {id:5,from:"EgyptPost",rider:"احمد مصطفي ",amount:400},
    {id:6,from:"QNB",rider:"احمد محمد ",amount:500},
    {id:7,from:"QNB",rider:" محمد السيد",amount:900},
  ];
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      scrollY:"60vh",
    scrollCollapse:true,
    paging:false,
    processing:false,
    info:false,
    responsive:true,
    tabIndex:1,
    scrollX:true
    };
  }

}
