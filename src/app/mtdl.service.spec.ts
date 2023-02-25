/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MtdlService } from './mtdl.service';

describe('Service: Mtdl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MtdlService]
    });
  });

  it('should ...', inject([MtdlService], (service: MtdlService) => {
    expect(service).toBeTruthy();
  }));
});
