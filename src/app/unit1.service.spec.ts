import { TestBed } from '@angular/core/testing';

import { Unit1Service } from './unit1.service';

describe('Unit1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Unit1Service = TestBed.get(Unit1Service);
    expect(service).toBeTruthy();
  });
});
