import { TestBed } from '@angular/core/testing';

import { ServiceEmpleadoFuncionService } from './service-empleado-funcion.service';

describe('ServiceEmpleadoFuncionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceEmpleadoFuncionService = TestBed.get(ServiceEmpleadoFuncionService);
    expect(service).toBeTruthy();
  });
});
