import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Empleado} from '../Modelo/Empleado';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmpleadoService {

  constructor(private http: HttpClient) {}
  url="http://localhost:8484/empleados";

  getEmpleados(){
    return this.http.get< Empleado[] >(this.url);
  }
  
  createEmpleado(empleado: Empleado){
    return this.http.post<Empleado>(this.url, empleado);
  }

  getEmpleadoIdentifiacion(identificacion: String){
    return this.http.get<Empleado>(this.url+ "/" + identificacion);
  }

  updateEmpleado(empleado: Empleado){
   console.log(empleado);
    
    return this.http.put<Empleado>(this.url+ "/" + empleado.id, empleado)
  }

  getPromedioDepartamento(id:number){
    return this.http.get<number>(this.url + "/promedio/" + id );
  }

  getSalariosMenores(salario:number){
    return this.http.get<Empleado[]>(this.url+"/salariosmenor/"+salario);
  }

  getSalariosMayores(salario:number){
    return this.http.get<Empleado[]>(this.url+"/salariosmayor/"+salario);
  }
  getSalarios(salario:number){
    return this.http.get<Empleado[]>(this.url+"/salarios/"+salario);
  }


}
