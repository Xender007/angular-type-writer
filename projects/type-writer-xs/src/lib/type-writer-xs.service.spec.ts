import { TestBed } from '@angular/core/testing';

import { TypeWriterXsService } from './type-writer-xs.service';

describe('TypeWriterXsService', () => {
  let service: TypeWriterXsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeWriterXsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
