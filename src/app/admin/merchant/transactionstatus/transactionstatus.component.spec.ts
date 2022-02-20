import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionstatusComponent } from './transactionstatus.component';

describe('TransactionstatusComponent', () => {
  let component: TransactionstatusComponent;
  let fixture: ComponentFixture<TransactionstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
