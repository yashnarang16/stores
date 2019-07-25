import { TestBed } from '@angular/core/testing';

import { StoreDetailsResolverService } from './store-details-resolver.service';

describe('StoreDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreDetailsResolverService = TestBed.get(StoreDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
