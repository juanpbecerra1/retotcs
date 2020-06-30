package com.tcs.backend.empresa;


import java.util.List;


public interface DepartamentoService {
    List<Departamento> listar();
    Departamento listarId(int id);
    Departamento add(Departamento departamento);
    Departamento edit(Departamento departamento);
    Departamento delete(int id);

}
