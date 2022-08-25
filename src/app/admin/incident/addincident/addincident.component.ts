import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/types/user';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-addincident',
  templateUrl: './addincident.component.html',
  styleUrls: ['./addincident.component.css']
})
export class AddincidentComponent implements OnInit {

  constructor(private service:IncidentService,private router:Router) { }
  users:User[] | undefined;

  ngOnInit(): void {
    this.getusers()
  }

  getusers(){
    this.service.getalluser().subscribe((res:any)=>{
      this.users=res.data as User[]
    })
  }
  ngsubmit(data:any){
    console.log(data)
    this.service.add(data.value).subscribe(res=>{
      console.log(res)
      this.router.navigateByUrl('/incident/list')
    })
  }

}
