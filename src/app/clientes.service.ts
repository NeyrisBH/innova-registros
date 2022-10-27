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

  update(data: any) {
    return this.http.put(`${API_BASE}/clientes/id`, data);
  }
}
