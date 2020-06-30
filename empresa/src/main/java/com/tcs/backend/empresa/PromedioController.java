package com.tcs.backend.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin (origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping ({"/promedio"})
public class PromedioController {
    @Autowired
    EmpleadoService empleadoService;

    @GetMapping (path = {"/{id}"})
    public double avgDeartamento(@PathVariable ("id") int departamento){
        return empleadoService.avgDepartamento(departamento);
    }
}
