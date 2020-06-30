import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/Modelo/Departamento';
import { Router } from '@angular/router';
import{ServiceService}from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  departamentos: Departamento[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getDepartamentos()
    .subscribe(data => {
      this.departamentos = data;
    })
  }

  Editar(departamento: Departamento): void{
    localStorage.setItem("id" , departamento.id.toString());
    this.router.navigate(["edit"]);

  }

  Eliminar(departamento: Departamento){
    this.service.deleteDepartamento(departamento)
    .subscribe(data => {
      this.departamentos = this.departamentos.filter(d => d != departamento);
      alert("Usuario Eliminado");
    })
  }

}
