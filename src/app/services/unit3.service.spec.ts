import { TestBed } from '@angular/core/testing';

import { Unit3Service } from './unit3.service';

describe('Unit3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Unit3Service = TestBed.get(Unit3Service);
    expect(service).toBeTruthy();
  });
});
