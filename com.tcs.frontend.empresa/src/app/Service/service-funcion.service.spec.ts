import { TestBed } from '@angular/core/testing';

import { ServiceFuncionService } from './service-funcion.service';

describe('ServiceFuncionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceFuncionService = TestBed.get(ServiceFuncionService);
    expect(service).toBeTruthy();
  });
});
