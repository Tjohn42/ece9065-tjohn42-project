import { TestBed } from '@angular/core/testing';

import { rest } from './rest.service';

describe('rest', () => {
  let service: rest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(rest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
