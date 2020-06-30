package com.tcs.backend.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoServiceImp implements EmpleadoService {
    @Autowired
    EmpleadoRepository empleadoRepository;

    @Override
    public List<Empleado> listar() {
        return empleadoRepository.findAll();
    }

    @Override
    public Empleado listarId(int id) {
        return null;
    }

    @Override
    public Empleado listarIdentificacion(String identificacion) {
        return empleadoRepository.findByIdentificacion(identificacion);
    }

    @Override
    public Empleado add(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }

    @Override
    public Empleado edit(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }

    @Override
    public Empleado delete(int id) {
        return null;
    }

    @Override
    public double avgDepartamento(int departamento) {
        return empleadoRepository.avgDepartamento(departamento);
    }

    @Override
    public  List<Empleado> listarSalarioMenor(double salario) {
        return empleadoRepository.findBySalarioLessThan(salario);
    }

    @Override
    public List<Empleado> listarSalarioMayor(double salario) {
        return empleadoRepository.findBySalarioGreaterThan(salario);
    }


    @Override
    public List<Empleado> listarSalarioIgual(double salario) {
        return empleadoRepository.findBySalario(salario);
    }
}
