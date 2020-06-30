package com.tcs.backend.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DepartamentoServiceImp implements DepartamentoService {

    @Autowired
    private DepartamentoRepository repository;

    @Override
    public List<Departamento> listar() {
        return repository.findAll();
    }

    @Override
    public Departamento listarId(int id) {
        return repository.findById(id);
    }

    @Override
    public Departamento add(Departamento departamento) {
        return repository.save(departamento);
    }

    @Override
    public Departamento edit(Departamento departamento) {
        return repository.save(departamento);
    }

    @Override
    public Departamento delete(int id) {
        Departamento departamento = repository.findById(id);
        if (departamento != null) {
             repository.delete(departamento);
        }
        return departamento;

    }

}
