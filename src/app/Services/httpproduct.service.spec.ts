import { TestBed } from '@angular/core/testing';

import { HttpproductService } from './httpproduct.service';

describe('HttpproductService', () => {
  let service: HttpproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
