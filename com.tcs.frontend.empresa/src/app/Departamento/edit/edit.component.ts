import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Departamento } from '../../Modelo/Departamento';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  departamento: Departamento = new Departamento();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getDepartamentoId(+id)
    .subscribe(data=>{
      this.departamento = data;
    })
  }

    Actualizar(departamento:Departamento){
      this.service.updateDepartamento(departamento)
      .subscribe(data => {
        this.departamento = data;
        alert("Se actualizo con exito");
        this.router.navigate(["listar"]);
      })
    


  }

}
