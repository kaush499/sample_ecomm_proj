import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFailureComponent } from './order-failure.component';

describe('OrderFailureComponent', () => {
  let component: OrderFailureComponent;
  let fixture: ComponentFixture<OrderFailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
