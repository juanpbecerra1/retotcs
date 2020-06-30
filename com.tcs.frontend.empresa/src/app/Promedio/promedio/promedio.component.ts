import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/Modelo/Departamento';
import { Router } from '@angular/router';
import{ServiceService}from '../../Service/service.service';
import { ServiceEmpleadoService } from 'src/app/Service/service-empleado.service';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit {

  departamentos: Departamento[];
  departamento: Departamento = new Departamento();
  promedio: number;
  constructor(private service: ServiceService, private router: Router, private serviceEmpleado: ServiceEmpleadoService) { }

  ngOnInit() {
    this.service.getDepartamentos()
    .subscribe(data => {
      this.departamentos = data;
    })
    
  }

  calcularPromedio(){
    this.serviceEmpleado.getPromedioDepartamento(this.departamento.id)
    .subscribe(data=>{
      this.promedio=data});
    
  }

}
