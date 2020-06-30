package com.tcs.backend.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoFuncionServiceImp implements EmpleadoFuncionService {
    @Autowired
    private EmpleadoFuncionRepository empleadoFuncionRepository;
    @Override
    public List<EmpleadoFuncion> listar() {
        return empleadoFuncionRepository.findAll();
    }

    @Override
    public EmpleadoFuncion listarId(int id) {
        return null;
    }

    @Override
    public List<EmpleadoFuncion> listarIdentificacion(String identificacion) {
        return empleadoFuncionRepository.findByIdentificacionEmpleado(identificacion);
    }


    @Override
    public EmpleadoFuncion add(EmpleadoFuncion empleadoFuncion) {
        return empleadoFuncionRepository.save(empleadoFuncion);
    }

    @Override
    public EmpleadoFuncion edit(EmpleadoFuncion empleadoFuncion) {
        return empleadoFuncionRepository.save(empleadoFuncion);
    }

    @Override
    public EmpleadoFuncion delete(int id) {
        return null;
    }
}
