package com.tcs.backend.empresa;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface FuncionRepository extends Repository<Funcion, Integer> {
    List<Funcion> findAll();

    Funcion findById(int id);

    List<Funcion>findByDepartamento(int departamento);


    Funcion save(Funcion funcion);

    void delete(Funcion funcion);

}
