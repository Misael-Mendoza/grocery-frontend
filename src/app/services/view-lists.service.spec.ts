import { TestBed } from '@angular/core/testing';

import { ViewListsService } from './view-lists.service';

describe('ViewListsService', () => {
  let service: ViewListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
