import { TestBed, inject } from '@angular/core/testing';

import { PikesUserService } from './pikes-user.service';

describe('PikesUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PikesUserService]
    });
  });

  it('should be created', inject([PikesUserService], (service: PikesUserService) => {
    expect(service).toBeTruthy();
  }));
});
