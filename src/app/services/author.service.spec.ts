import { TestBed, inject } from '@angular/core/testing';

import { AuthorService } from './book.service';

describe('AuthorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorService]
    });
  });

  it('should be created', inject([AuthorService], (service: AuthorService) => {
    expect(service).toBeTruthy();
  }));
});
