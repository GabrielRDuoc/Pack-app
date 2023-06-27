import { TestBed } from '@angular/core/testing';

import { DdserviceService } from './dbservice.service';

describe('DbserviceService', () => {
  let service: DdserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
