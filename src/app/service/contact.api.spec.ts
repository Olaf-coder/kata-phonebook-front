import { TestBed } from '@angular/core/testing';

import { ContactApi } from './contact.api';

describe('ContactService', () => {
  let service: ContactApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
