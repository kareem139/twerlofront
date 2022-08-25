import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentlstComponent } from './incidentlst.component';

describe('IncidentlstComponent', () => {
  let component: IncidentlstComponent;
  let fixture: ComponentFixture<IncidentlstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentlstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentlstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
