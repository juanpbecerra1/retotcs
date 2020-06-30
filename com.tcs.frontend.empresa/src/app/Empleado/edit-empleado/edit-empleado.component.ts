import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceEmpleadoService } from 'src/app/Service/service-empleado.service';
import { Empleado } from '../../Modelo/Empleado';
@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {
  empleado: Empleado;

  constructor(private router: Router, private serviceEmpleado: ServiceEmpleadoService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.serviceEmpleado.getEmpleadoIdentifiacion(id)
    .subscribe(data => {
      this.empleado = data;                
    });
  }

Guardar(empleado: Empleado){
  this.serviceEmpleado.updateEmpleado(empleado)
  .subscribe(data=>{
    empleado = data;

     alert("Se actualizo el empleado");
     this.router.navigate(["/listarEmpleado"]);
    });
}

}
