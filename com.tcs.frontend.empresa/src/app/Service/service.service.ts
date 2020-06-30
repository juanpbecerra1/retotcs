import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHandlingStrategy } from '@angular/router';
import { Departamento } from '../Modelo/Departamento';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
    constructor(private http: HttpClient) {}
    url = "http://localhost:8484/departamentos";

    getDepartamentos(){
      return this.http.get<Departamento[]>(this.url);
    }

    createDepartamento(departamento: Departamento){
        return this.http.post<Departamento>(this.url, departamento);
    }

    getDepartamentoId(id: number){
      return this.http.get<Departamento>(this.url + "/" + id );
    }

    updateDepartamento(departamento: Departamento){
      return this.http.put<Departamento>(this.url + "/" + departamento.id, departamento);
    }

    deleteDepartamento(departamento: Departamento){
      return this.http.delete<Departamento>(this.url + "/" + departamento.id);

    }


}
