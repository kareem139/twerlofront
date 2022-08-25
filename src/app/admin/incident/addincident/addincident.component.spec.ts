import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddincidentComponent } from './addincident.component';

describe('AddincidentComponent', () => {
  let component: AddincidentComponent;
  let fixture: ComponentFixture<AddincidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddincidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
