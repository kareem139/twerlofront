import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentListResponse } from 'src/app/types/incident';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-incidentlst',
  templateUrl: './incidentlst.component.html',
  styleUrls: ['./incidentlst.component.css']
})
export class IncidentlstComponent implements OnInit {

  constructor(private service:IncidentService,private router:Router) { 
    const payload=JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));

    this.role=payload?.role;

  }
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];


  incidents:IncidentListResponse[]|undefined
  role:string|undefined
  ngOnInit(): void {

    this.getallIncident()
  }

  getallIncident(){
    console.log(this.role)
    this.service.getallincident(1,7,this.role).subscribe((res:any)=>{
      console.log(res)
      this.incidents=res.data
    })
  }
  resolveIncident(id:string){
    this.service.resolveReq(id).subscribe((res)=>{
      this.router.navigateByUrl('/incident/list')
    })
  }

  MoreDetail(id:string){
    this.router.navigate(['/incident/details'],{queryParams:{id:id}})
  }


  getRequestParams(searchTitle:string, page:number, pageSize:number): any {
    // tslint:disable-next-line:prefer-const
    let params:any = {};
    if (searchTitle) {
      params[`title`] = searchTitle;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  retrieveTutorials(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.service.getAll(params)
      .subscribe(
        response => {
          const { tutorials, totalItems } = response;
          this.tutorials = tutorials;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  handlePageChange(event:any): void {
    this.page = event;
    this.retrieveTutorials();
  }
  handlePageSizeChange(event:any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }
  

}
