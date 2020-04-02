import { TestBed } from '@angular/core/testing';

import { StoragePermissionService } from './storage-permission.service';

describe('StoragePermissionService', () => {
  let service: StoragePermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoragePermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
