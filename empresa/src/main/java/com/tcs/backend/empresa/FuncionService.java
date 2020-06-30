package com.tcs.backend.empresa;

import java.util.List;

public interface FuncionService {
    List<Funcion> listar();
    Funcion listarId(int id);
    List<Funcion> listarDepartamento(int departamento);
    Funcion add(Funcion funcion);
    Funcion edit(Funcion funcion);
    Funcion delete(int id);
}
