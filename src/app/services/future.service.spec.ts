import { TestBed } from '@angular/core/testing';

import { FutureService } from './future.service';

describe('FutureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FutureService = TestBed.get(FutureService);
    expect(service).toBeTruthy();
  });
});
