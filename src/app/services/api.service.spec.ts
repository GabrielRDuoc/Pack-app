import { TestBed } from '@angular/core/testing';

import { ApiserviceService} from './api.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ApiserviceService', () => {
  let service: ApiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[HttpClient]
    });
    service = TestBed.inject(ApiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
