import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentactionsComponent } from './paymentactions.component';

describe('PaymentactionsComponent', () => {
  let component: PaymentactionsComponent;
  let fixture: ComponentFixture<PaymentactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
