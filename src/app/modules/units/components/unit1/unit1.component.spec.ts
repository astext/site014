import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Unit1Component } from './unit1.component';

describe('Unit1Component', () => {
  let component: Unit1Component;
  let fixture: ComponentFixture<Unit1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Unit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
