import { TestBed } from '@angular/core/testing';

import { BackendManagementService } from './backend-management.service';

describe('BackendManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendManagementService = TestBed.get(BackendManagementService);
    expect(service).toBeTruthy();
  });
});
