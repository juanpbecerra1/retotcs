import { TestBed } from '@angular/core/testing';

import { ServiceEmpleadoService } from './service-empleado.service';

describe('ServiceEmpleadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceEmpleadoService = TestBed.get(ServiceEmpleadoService);
    expect(service).toBeTruthy();
  });
});
