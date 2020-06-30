import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Departamento/listar/listar.component';
import { AddComponent } from './Departamento/add/add.component';
import { EditComponent } from './Departamento/edit/edit.component';
import { ListEmpleadoComponent } from './Empleado/list-empleado/list-empleado.component';
import { AddEmpleadoComponent } from './Empleado/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './Empleado/edit-empleado/edit-empleado.component';
import { VerFuncionesComponent } from './Empleado/ver-funciones/ver-funciones.component';
import { BuscarComponent } from './Buscador/buscar.component';
import { PromedioComponent } from './Promedio/promedio/promedio.component';
import { ConsultarSalariosComponent } from './Empleado/consultar-salarios/consultar-salarios.component';
import {ListComponent} from './Funcion/list/list.component';


const ROUTES: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'add' ,component:AddComponent},
  {path:'edit' ,component:EditComponent},
  {path:'listarEmpleado',component:ListEmpleadoComponent},
  {path:'addEmpleado', component:AddEmpleadoComponent},
  {path:'editEmpleado', component:EditEmpleadoComponent},
  {path:'listarFunciones', component:ListComponent} ,
  {path:'verFunciones', component:VerFuncionesComponent},
  { path: 'buscar', component: BuscarComponent },
  { path: 'promedio', component: PromedioComponent },
  {path:'consultarSalarios',component:ConsultarSalariosComponent}

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES,{useHash:true});
