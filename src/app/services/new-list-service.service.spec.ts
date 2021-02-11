import { TestBed } from '@angular/core/testing';

import { NewListServiceService } from './new-list-service.service';

describe('NewListServiceService', () => {
  let service: NewListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
