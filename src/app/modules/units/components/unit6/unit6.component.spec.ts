import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Unit6Component } from './unit6.component';

describe('Unit6Component', () => {
  let component: Unit6Component;
  let fixture: ComponentFixture<Unit6Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Unit6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unit6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
