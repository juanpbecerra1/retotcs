import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../Modelo/Empleado';
import { ServiceEmpleadoService } from 'src/app/Service/service-empleado.service';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Departamento } from '../../Modelo/Departamento';
import { ServiceEmpleadoFuncionService } from 'src/app/Service/service-empleado-funcion.service';
import {Funcion} from '../../Modelo/Funcion';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {
 empleados: Empleado[];

  constructor(private serviceEmpleado: ServiceEmpleadoService, private router: Router, private serviceDepartamento: ServiceService, private serviceEmpleadoFuncion: ServiceEmpleadoFuncionService) { } ;
  ngOnInit() {
    this.serviceEmpleado.getEmpleados()
    .subscribe(data => {
      this.empleados = data;      
    });
 }

   nuevoEmpleado(){
      this.router.navigate(['/addEmpleado']);
      
      }
  
    verFunciones(empleado: Empleado):void{
     localStorage.setItem("identificacion", empleado.identificacion.toString());
      this.router.navigate(["verFunciones"]);
    }

    Editar(empleado: Empleado): void{
      localStorage.setItem("id" , empleado.identificacion.toString());
      this.router.navigate(["editEmpleado"]);
  
    }
}
