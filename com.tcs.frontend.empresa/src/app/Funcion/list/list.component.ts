import { Component, OnInit } from '@angular/core';
import { ServiceFuncionService } from 'src/app/Service/service-funcion.service';
import {Funcion} from '../../Modelo/Funcion';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  funciones: Funcion[];

  constructor(private serviceFuncion: ServiceFuncionService) { }

  ngOnInit() {
   this.serviceFuncion. getFunciones()
   .subscribe(data => {this.funciones = data});

  }

}
