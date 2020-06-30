package com.tcs.backend.empresa;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/departamentos"})
public class DepartamentoController {

    @Autowired
    DepartamentoService service;

    @GetMapping
    public List<Departamento>listar(){
        return service.listar();
    }

    @PostMapping
    public Departamento agregar(@RequestBody Departamento departamento){
        return service.add(departamento);
    }

    @GetMapping(path = {"/{id}"})
    public Departamento listarId(@PathVariable("id") int id){
        return service.listarId(id);
    }

    @PutMapping(path = {"/{id}"})
    public Departamento editar(@RequestBody Departamento departamento, @PathVariable("id") int id){
        departamento.setId(id);
        return service.edit(departamento);

    }

    @DeleteMapping(path = {"/{id}"} )
    public Departamento delete(@PathVariable("id") int id){
        return service.delete(id);
    }


}
