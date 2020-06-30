import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEmpleadoFuncionService } from 'src/app/Service/service-empleado-funcion.service';
import{EmpleadoFuncion} from '../../Modelo/EmpleadoFuncion';

@Component({
  selector: 'app-ver-funciones',
  templateUrl: './ver-funciones.component.html',
  styleUrls: ['./ver-funciones.component.css']
})
export class VerFuncionesComponent implements OnInit {
  empleadoFunciones: EmpleadoFuncion[];

  constructor(private router:Router,private serviceEmpleadoFuncion: ServiceEmpleadoFuncionService) { }

  ngOnInit() {
    this.verFunciones();
  }

  verFunciones(){
    let identificacion= localStorage.getItem("identificacion");
    this.serviceEmpleadoFuncion.getEmpleadoFuncion(+identificacion)
    .subscribe(data=>{this.empleadoFunciones = data});
  }

}
