import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Unit4Component } from './unit4.component';

describe('Unit4Component', () => {
  let component: Unit4Component;
  let fixture: ComponentFixture<Unit4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Unit4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unit4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
