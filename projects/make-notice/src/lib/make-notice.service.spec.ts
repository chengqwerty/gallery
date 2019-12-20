import { TestBed } from '@angular/core/testing';

import { MakeNoticeService } from './make-notice.service';

describe('MakeNoticeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakeNoticeService = TestBed.get(MakeNoticeService);
    expect(service).toBeTruthy();
  });
});
