package com.tcs.backend.empresa;

import java.util.List;

public interface EmpleadoService {
    List<Empleado> listar();
    Empleado listarId(int id);
    Empleado listarIdentificacion(String identificacion);
    Empleado add(Empleado empleado);
    Empleado edit(Empleado empleado);
    Empleado delete(int id);
    double avgDepartamento(int departamento);
    List<Empleado> listarSalarioMenor(double salario);
    List<Empleado> listarSalarioMayor(double salario);
    List<Empleado> listarSalarioIgual(double salario);

}
