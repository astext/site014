import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebdevComponent } from './webdev.component';

describe('WebdevComponent', () => {
  let component: WebdevComponent;
  let fixture: ComponentFixture<WebdevComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
