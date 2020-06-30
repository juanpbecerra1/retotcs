import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Departamento/listar/listar.component';
import { AddComponent } from './Departamento/add/add.component';
import { EditComponent } from './Departamento/edit/edit.component';
import {FormsModule} from '@angular/forms';
import { ServiceService } from './Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import { AddEmpleadoComponent } from './Empleado/add-empleado/add-empleado.component';
import { ListEmpleadoComponent } from './Empleado/list-empleado/list-empleado.component';
import { EditEmpleadoComponent } from './Empleado/edit-empleado/edit-empleado.component';
import { ListComponent } from './Funcion/list/list.component';
import { VerFuncionesComponent } from './Empleado/ver-funciones/ver-funciones.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { BuscarComponent } from './Buscador/buscar.component';
import { PromedioComponent } from './Promedio/promedio/promedio.component';
import { ConsultarSalariosComponent } from './Empleado/consultar-salarios/consultar-salarios.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    AddEmpleadoComponent,
    ListEmpleadoComponent,
    EditEmpleadoComponent,
    ListComponent,
    VerFuncionesComponent,
    NavbarComponent,
    BuscarComponent,
    PromedioComponent,
    ConsultarSalariosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
