package com.tcs.backend.empresa;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface DepartamentoRepository extends Repository<Departamento, Integer> {
    List<Departamento> findAll();

    Departamento findById(int id);

    Departamento save(Departamento departamento);

    void delete(Departamento departamento);
}
