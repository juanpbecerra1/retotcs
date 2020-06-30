package com.tcs.backend.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin (origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping ({"/roles"})
public class EmpleadoFuncionController {

    @Autowired
    EmpleadoFuncionService empleadoFuncionService;

    @GetMapping
    List<EmpleadoFuncion> listar(){return empleadoFuncionService.listar();}

    @GetMapping(path = {"/{identificacion}"})
    public List<EmpleadoFuncion>listarIdentificacion(@PathVariable("identificacion") String identificacion){
        return empleadoFuncionService.listarIdentificacion(identificacion);
    }

    @PostMapping
    public EmpleadoFuncion agregar(@RequestBody EmpleadoFuncion empleadoFuncion){
        return empleadoFuncionService.add(empleadoFuncion);
    }

}
