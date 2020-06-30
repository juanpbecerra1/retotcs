package com.tcs.backend.empresa;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface EmpleadoRepository extends Repository<Empleado, Integer> {
    List<Empleado> findAll();
    Empleado findById(int id);
    Empleado findByIdentificacion(String identifiacion);
    Empleado save(Empleado empleado);
    void delete (Empleado empleado);
    @Query( value ="SELECT AVG( E.SALARIO) FROM schemaempresa.EMPLEADO E WHERE E.DEPARTAMENTO = ?1", nativeQuery = true)
    double avgDepartamento(int departamaneto);
    List<Empleado> findBySalarioLessThan(double salario);
    List<Empleado> findBySalarioGreaterThan(double salario);
    List<Empleado> findBySalario(double salario);


}
