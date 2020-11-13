import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Unit7Component } from './unit7.component';

describe('Unit7Component', () => {
  let component: Unit7Component;
  let fixture: ComponentFixture<Unit7Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Unit7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unit7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
