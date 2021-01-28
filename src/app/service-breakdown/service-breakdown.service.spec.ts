import { TestBed } from '@angular/core/testing';

import { ServiceBreakdownService } from './service-breakdown.service';

describe('ServiceBreakdownService', () => {
  let service: ServiceBreakdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBreakdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
