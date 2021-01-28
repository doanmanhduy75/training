import { TestBed } from '@angular/core/testing';

import { ReservationCoverageService } from './reservation-coverage.service';

describe('ReservationCoverageService', () => {
  let service: ReservationCoverageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationCoverageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
