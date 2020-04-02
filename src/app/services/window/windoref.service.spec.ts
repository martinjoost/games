import { TestBed } from '@angular/core/testing';

import { WindorefService } from './windoref.service';

describe('WindorefService', () => {
  let service: WindorefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindorefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
