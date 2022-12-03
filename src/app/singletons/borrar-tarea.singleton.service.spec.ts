import { TestBed } from '@angular/core/testing';

import { BorrarTareaSingletonService } from './borrar-tarea.singleton.service';

describe('BorrarTareaSingletonService', () => {
  let service: BorrarTareaSingletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrarTareaSingletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
