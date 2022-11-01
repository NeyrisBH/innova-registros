import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_BASE = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class ClientesService { 

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${API_BASE}/clientes`);
  }

  create(data: any) {
    return this.http.post(`${API_BASE}/clientes`, data);
  }

  update(id: number, cliente: ClientesService) {
    return this.http.put(`${API_BASE}/clientes/${id}`, cliente);
  }

  delete(id: number){
    return this.http.delete(`${API_BASE}/clientes/${id}`);
  }   
}
