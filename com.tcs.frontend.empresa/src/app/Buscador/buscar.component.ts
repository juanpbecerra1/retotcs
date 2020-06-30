import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceEmpleadoService } from 'src/app/Service/service-empleado.service';
import { Empleado } from '../Modelo/Empleado';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  empleados: Empleado = new Empleado();
  termino:string;
  valor:number;
  estado: string;

 constructor(private serviceEmpleado: ServiceEmpleadoService, private router: Router) { } ;
  
 ngOnInit() {   
  this.Buscar();
 }

 Buscar(){
  this.termino=localStorage.getItem("identificacion");
  this.serviceEmpleado.getEmpleadoIdentifiacion(this.termino)
  .subscribe(data => {
    this.empleados = data;                
  });
 }

 cambiarEstado(empleado:Empleado){   
  
  if(empleado.activo==1){
    this.valor=0;
    this.estado= "Inactivo";
    
  }else{
    this.valor=1;
    this.estado= "Activo";
  }
  empleado.activo=this.valor;
  
  this.serviceEmpleado.updateEmpleado(empleado)
  .subscribe(data=>{
    empleado = data;

     alert("Se cambio el estado");
     this.router.navigate(["/listarEmpleado"]);
  })
 }

}
