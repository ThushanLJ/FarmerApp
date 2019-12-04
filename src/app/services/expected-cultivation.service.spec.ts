import { TestBed } from '@angular/core/testing';

import { ExpectedCultivationService } from './expected-cultivation.service';

describe('ExpectedCultivationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpectedCultivationService = TestBed.get(ExpectedCultivationService);
    expect(service).toBeTruthy();
  });
});
