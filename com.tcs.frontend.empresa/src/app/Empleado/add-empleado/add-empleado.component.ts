import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/Modelo/Departamento';
import { Empleado } from '../../Modelo/Empleado';
import { Router } from '@angular/router';
import{ServiceService}from '../../Service/service.service'
import { ServiceEmpleadoService } from 'src/app/Service/service-empleado.service';
import { ServiceFuncionService } from 'src/app/Service/service-funcion.service';
import { ServiceEmpleadoFuncionService } from 'src/app/Service/service-empleado-funcion.service';
import {Funcion} from '../../Modelo/Funcion';
import{EmpleadoFuncion} from '../../Modelo/EmpleadoFuncion';


@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {

    departamentos: Departamento[];
    funciones: Funcion[];
    funcion: Funcion[];
    empleado : Empleado = new Empleado;
    empleadoFuncion: EmpleadoFuncion = new EmpleadoFuncion;
    id: number;


  constructor(private serviceDepartamento: ServiceService, private router: Router, private serviceEmpleado: ServiceEmpleadoService, private serviceFuncion: ServiceFuncionService, private serviceEmpleadoFuncion: ServiceEmpleadoFuncionService) {}


  ngOnInit() {
    
    this.serviceDepartamento.getDepartamentos()
    .subscribe(data => {
      this.departamentos = data;
    });

  }

  getFuncionDepartamento(){    
    this.serviceFuncion.getFuncionDepartamento(this.empleado.departamento.id)
    .subscribe(data=>{this.funciones = data})
  }


  guardar(){ 
  
   for (let index = 0; index < this.funcion.length; index++) {
      this.empleadoFuncion.identificacionEmpleado= this.empleado.identificacion;
      this.empleadoFuncion.funcion= this.funcion[index];
      this.serviceEmpleadoFuncion.createEmpleadoFuncion(this.empleadoFuncion)
      .subscribe(data=>{
        alert("Funciones agregadas");     
        });         
    }
  this.serviceEmpleado.createEmpleado(this.empleado)  
  .subscribe(data =>{
    alert(" Se agregó con exito ");
    this.router.navigate(["listarEmpleado"])
    }); 
  }
  



}
