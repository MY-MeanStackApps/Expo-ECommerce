import { TestBed } from '@angular/core/testing';

import { CodeDomainService } from './code-domain.service';

describe('CodeDomainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeDomainService = TestBed.get(CodeDomainService);
    expect(service).toBeTruthy();
  });
});
