import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantpaymentComponent } from './merchantpayment.component';

describe('MerchantpaymentComponent', () => {
  let component: MerchantpaymentComponent;
  let fixture: ComponentFixture<MerchantpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
