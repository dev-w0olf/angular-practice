import { TestBed } from '@angular/core/testing';

import { AirportService } from './airport.service';

describe('AirportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirportService = TestBed.get(AirportService);
    expect(service).toBeTruthy();
  });
});
