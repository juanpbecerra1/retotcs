import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{EmpleadoFuncion} from '../Modelo/EmpleadoFuncion';


@Injectable({
  providedIn: 'root'
})
export class ServiceEmpleadoFuncionService {

  constructor(private http: HttpClient) {}
  url="http://localhost:8484/roles";

  createEmpleadoFuncion(empleadoFuncion: EmpleadoFuncion){
    return this.http.post<EmpleadoFuncion>(this.url,empleadoFuncion);
  }

  getEmpleadoFuncion(identificacion: number){
    return this.http.get<EmpleadoFuncion[]>(this.url + "/" + identificacion);
  }
}
