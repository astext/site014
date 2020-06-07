import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Unit2Component } from './unit2.component';

describe('Unit2Component', () => {
  let component: Unit2Component;
  let fixture: ComponentFixture<Unit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Unit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
