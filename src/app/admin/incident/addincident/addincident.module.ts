import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddincidentRoutingModule } from './addincident-routing.module';
import { AddincidentComponent } from './addincident.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IncidentlstComponent } from '../incidentlst/incidentlst.component';
import { IncidentDetailsComponent } from '../incident-details/incident-details.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AddincidentComponent,
    IncidentlstComponent,
    IncidentDetailsComponent
  ],
  imports: [
    CommonModule,
    AddincidentRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class AddincidentModule { }
