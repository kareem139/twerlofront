import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  data:any=[
    {id:2,company:"Mac",amount:500,user:"user01",status:1},
    {id:3,company:"Mac",amount:300,user:"user02",status:2},
    {id:4,company:"Marsol",amount:200,user:"user01",status:1},
    {id:5,company:"Amazon",amount:400,user:"user01",status:2},
    {id:6,company:"BTech",amount:500,user:"user02",status:2},
    {id:7,company:"Noon",amount:900,user:"user01",status:3},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
