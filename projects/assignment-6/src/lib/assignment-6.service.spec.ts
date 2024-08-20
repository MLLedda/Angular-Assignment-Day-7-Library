import { TestBed } from '@angular/core/testing';

import { Assignment6Service } from './assignment-6.service';

describe('Assignment6Service', () => {
  let service: Assignment6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Assignment6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
