package com.tcs.backend.empresa;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface EmpleadoFuncionRepository extends Repository<EmpleadoFuncion, Integer> {

    List<EmpleadoFuncion> findAll();

    EmpleadoFuncion findById(int id);

    List<EmpleadoFuncion>findByIdentificacionEmpleado(String identificacion);

    EmpleadoFuncion save(EmpleadoFuncion empleadoFuncion);

    void delete(EmpleadoFuncion empleadoFuncion);
}
