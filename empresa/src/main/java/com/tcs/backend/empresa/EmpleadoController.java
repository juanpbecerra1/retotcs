package com.tcs.backend.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin (origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping ({"/empleados"})
public class EmpleadoController {
    @Autowired
    EmpleadoService empleadoService;

    @GetMapping
    List<Empleado>listar(){
        return empleadoService.listar();
    }

   @GetMapping(path = {"/{identificacion}"})
    public Empleado listarIdentificacion(@PathVariable("identificacion") String identificacion){
        return empleadoService.listarIdentificacion(identificacion);
    }

    @PostMapping
    public Empleado agregar(@RequestBody Empleado empleado){
        return empleadoService.add(empleado);}

    @PutMapping(path = {"/{id}"})
    Empleado editar(@RequestBody Empleado empleado, @PathVariable("id") int id){
        empleado.setId(id);
        return empleadoService.edit(empleado);
    }

    @GetMapping (path = {"/promedio/{id}"})
    public double avgDeartamento(@PathVariable ("id") int departamento){
        return empleadoService.avgDepartamento(departamento);
    }

    @GetMapping(path = {"/salariosmenor/{salario}"})
    public  List<Empleado> listarSalarioMenor(@PathVariable("salario") double salario){
        return empleadoService.listarSalarioMenor(salario);
    }
    @GetMapping(path = {"/salariosmayor/{salario}"})
    public  List<Empleado> listarSalarioMayor(@PathVariable("salario") double salario){
        return empleadoService.listarSalarioMayor(salario);
    }
    @GetMapping(path = {"/salarios/{salario}"})
    public  List<Empleado> listarSalario(@PathVariable("salario") double salario){
        return empleadoService.listarSalarioIgual(salario);
    }




}
