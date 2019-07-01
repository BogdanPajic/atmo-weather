import { TestBed, inject } from '@angular/core/testing';

import { AtmoService } from './atmo.service';

describe('AtmoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtmoService]
    });
  });

  it('should be created', inject([AtmoService], (service: AtmoService) => {
    expect(service).toBeTruthy();
  }));
});
