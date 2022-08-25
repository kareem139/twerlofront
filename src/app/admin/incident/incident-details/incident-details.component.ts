import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidentListResponse } from 'src/app/types/incident';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css']
})
export class IncidentDetailsComponent implements OnInit {
  id:string|null='';
  incident:IncidentListResponse|undefined
  role:string=''

  constructor(private activeroute:ActivatedRoute,private service:IncidentService,private router:Router) {
    this.activeroute.queryParamMap.subscribe(p=>{
      this.id=p.get('id')
    })
    const payload=JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));

    this.role=payload.role;
   }

  ngOnInit(): void {
    this.service.MoreDetailReq(this.id).subscribe((res:any)=>{
      this.incident=res.data
    })
  }

  resolveIncident(id:string|null){
    this.service.resolveReq(id).subscribe((res)=>{
      this.router.navigateByUrl('/incident/list')
    })
  }

}
