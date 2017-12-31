import { TestBed, inject } from '@angular/core/testing';

import { MediaItemService } from './media-item.service';

describe('MediaItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaItemService]
    });
  });

  it('should be created', inject([MediaItemService], (service: MediaItemService) => {
    expect(service).toBeTruthy();
  }));
});
