import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Unit3Component } from './unit3.component';

describe('Unit3Component', () => {
  let component: Unit3Component;
  let fixture: ComponentFixture<Unit3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Unit3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unit3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
