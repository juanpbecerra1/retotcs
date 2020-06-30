import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  termino:string;
  title = 'empresa';

  constructor(private router:Router){}
  Listar(){
    this.router.navigate(["listar"]);
  }

  Nuevo(){
    this.router.navigate(["add"]);
  }

  ListarEmpleado(){
    this.router.navigate(["listarEmpleado"]);
  }
  
  buscarEmpleado(){
    localStorage.setItem("identificacion" , this.termino);
    this.router.navigate(['/buscar']);
  }

  


}
