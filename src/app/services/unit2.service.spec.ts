import { TestBed } from '@angular/core/testing';

import { Unit2Service } from './unit2.service';

describe('Unit2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Unit2Service = TestBed.get(Unit2Service);
    expect(service).toBeTruthy();
  });
});
