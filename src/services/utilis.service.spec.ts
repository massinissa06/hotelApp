import { TestBed } from '@angular/core/testing';

import { UtilisService } from './utilis.service';

describe('UtilisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilisService = TestBed.get(UtilisService);
    expect(service).toBeTruthy();
  });
});
