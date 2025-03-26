import { TestBed } from '@angular/core/testing';

import { ContactApi } from './contact.api';
import {provideHttpClient} from "@angular/common/http";

describe('ContactService', () => {
  let service: ContactApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(ContactApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
