import { TestBed } from '@angular/core/testing';

import { MakeGalleryService } from './make-gallery.service';

describe('MakeGalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakeGalleryService = TestBed.get(MakeGalleryService);
    expect(service).toBeTruthy();
  });
});
