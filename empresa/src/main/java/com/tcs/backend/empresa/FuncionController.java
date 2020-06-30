package com.tcs.backend.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin (origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping ({"/funciones"})
public class FuncionController {

    @Autowired
    FuncionService funcionService;

    @GetMapping
    public List<Funcion>listar(){
        return funcionService.listar();
    }

    @GetMapping(path = {"/{departamento}"})
    public List<Funcion> listarDepartamento(@PathVariable("departamento") int departamento){
        return funcionService.listarDepartamento(departamento);
    }
}
