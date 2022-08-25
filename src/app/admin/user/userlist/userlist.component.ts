import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/service/account.service';
import { User } from 'src/app/types/user';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private service:AccountService,private router:Router) { }
  users:User[]|undefined
  ngOnInit(): void {
    this.getusers()
  }

  getusers(){
    this.service.getalluser().subscribe((res:any)=>{
      this.users=res.data as User[]
    })
  }

}
