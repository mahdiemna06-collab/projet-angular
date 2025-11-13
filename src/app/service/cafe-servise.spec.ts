import { TestBed } from '@angular/core/testing';

import { CafeServise } from './cafe-servise';

describe('CafeServise', () => {
  let service: CafeServise;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafeServise);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
