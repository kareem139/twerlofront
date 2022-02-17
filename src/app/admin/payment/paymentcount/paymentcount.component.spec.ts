import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentcountComponent } from './paymentcount.component';

describe('PaymentcountComponent', () => {
  let component: PaymentcountComponent;
  let fixture: ComponentFixture<PaymentcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
