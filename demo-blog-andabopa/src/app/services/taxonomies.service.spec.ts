import { TestBed } from '@angular/core/testing';

import { TaxonomiesService } from './taxonomies.service';

describe('TaxonomiesService', () => {
  let service: TaxonomiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxonomiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
