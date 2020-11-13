import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Unit5Component } from './unit5.component';

describe('Unit5Component', () => {
  let component: Unit5Component;
  let fixture: ComponentFixture<Unit5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Unit5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unit5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
