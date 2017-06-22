import { TestBed, inject } from '@angular/core/testing';

import { PikesMapService } from './pikes-map.service';

describe('PikesMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PikesMapService]
    });
  });

  it('should be created', inject([PikesMapService], (service: PikesMapService) => {
    expect(service).toBeTruthy();
  }));
});
