import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../Modelo/Empleado';
import { ServiceEmpleadoService } from 'src/app/Service/service-empleado.service';

@Component({
  selector: 'app-consultar-salarios',
  templateUrl: './consultar-salarios.component.html',
  styleUrls: ['./consultar-salarios.component.css']
})
export class ConsultarSalariosComponent implements OnInit {
  empleados: Empleado[];
  busqueda: number;
  salario: number;
  constructor(private serviceEmpleado: ServiceEmpleadoService, private router: Router) { }

  ngOnInit() {
  }

  listarSalarios(){
    switch (this.busqueda) {
      case 1:
          this.serviceEmpleado.getSalarios(this.salario)
          .subscribe(data => {
            this.empleados = data;
          });
        break;

      case 2:
          this.serviceEmpleado.getSalariosMenores(this.salario)
          .subscribe(data => {
            this.empleados = data;
          });

      case 3:
          this.serviceEmpleado.getSalariosMayores(this.salario)
          .subscribe(data => {
            this.empleados = data;
          });
    }

  }

}
