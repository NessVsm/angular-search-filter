import { TestBed } from '@angular/core/testing';

import { VariablexchangeService } from './variablexchange.service';

describe('VariablexchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VariablexchangeService = TestBed.get(VariablexchangeService);
    expect(service).toBeTruthy();
  });
});
