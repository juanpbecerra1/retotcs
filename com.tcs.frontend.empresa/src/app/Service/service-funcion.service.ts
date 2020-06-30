import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Funcion} from '../Modelo/Funcion';
import {Departamento} from '../Modelo/Departamento';
@Injectable({
  providedIn: 'root'
})
export class ServiceFuncionService {

  constructor(private http:HttpClient) {}
  url="http://localhost:8484/funciones";

  getFunciones(){
    return this.http.get<Funcion[]>(this.url)
  }

  getFuncionDepartamento(departamento: number){
    return this.http.get<Funcion[]>(this.url + "/" + departamento );
  }
}
