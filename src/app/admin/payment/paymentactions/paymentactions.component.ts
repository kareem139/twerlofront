import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentactions',
  templateUrl: './paymentactions.component.html',
  styleUrls: ['./paymentactions.component.css']
})
export class PaymentactionsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  data:any=[
    {id:2,to:"Mac",rider:"احمد مصطفي السيد",amount:500},
    {id:3,to:"Marsol",rider:" مصطفي السيد",amount:300},
    {id:4,to:"Mac",rider:"احمد  السيد",amount:200},
    {id:5,to:"Marsol",rider:"احمد مصطفي ",amount:400},
    {id:6,to:"Mac",rider:"احمد محمد ",amount:500},
    {id:7,to:"Mac",rider:" محمد السيد",amount:900},
  ];

  data2:any=[
    {id:23,to:"Mac",rider:"احمد مصطفي السيد",amount:500},
    {id:32,to:"Marsol",rider:" مصطفي السيد",amount:300},
    {id:46,to:"Mac",rider:"احمد  السيد",amount:200},

  ];
  data3:any=[
    {id:47,to:"Mac",rider:"احمد مصطفي السيد",amount:500},
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
