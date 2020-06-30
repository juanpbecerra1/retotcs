import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from '../../Modelo/Departamento';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  departamento:Departamento = new Departamento();

  constructor(private router:Router, private service:ServiceService,) {
  }

  ngOnInit() {
  }

  Agregar(){ 
    this.service.createDepartamento(this.departamento)
    .subscribe(data => {
      alert(" Se agregó con exito ");
      this.router.navigate(["listar"]);
    });

  }

}
