package com.tcs.backend.empresa;

import java.util.List;

public interface EmpleadoFuncionService {
    List<EmpleadoFuncion> listar();
    EmpleadoFuncion listarId(int id);
    List<EmpleadoFuncion>listarIdentificacion(String identificacion);
    EmpleadoFuncion add(EmpleadoFuncion empleadoFuncion);
    EmpleadoFuncion edit(EmpleadoFuncion empleadoFuncion);
    EmpleadoFuncion delete(int id);
}
