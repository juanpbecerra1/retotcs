package com.tcs.backend.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class FuncionServiceImp implements FuncionService {

    @Autowired
    private FuncionRepository funcionRepository;

    @Override
    public List<Funcion> listar() {
        return funcionRepository.findAll();
    }

    @Override
    public Funcion listarId(int id) {
        return null;
    }

    @Override
    public List<Funcion> listarDepartamento(int departamento) {
        return funcionRepository.findByDepartamento(departamento);
    }

    @Override
    public Funcion add(Funcion funcion) {
        return null;
    }

    @Override
    public Funcion edit(Funcion funcion) {
        return null;
    }

    @Override
    public Funcion delete(int id) {
        return null;
    }
}
