import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  clientes: any[] = [];
  nuevoCliente = {
    identificacion: '',
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    direccion: ''
  }

  constructor(
    private clienteService: ClientesService
  ) { }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.clienteService.getAll()
      .subscribe((data: any) => this.clientes = data._embedded.clientes);
  }

  crear() {
    this.clienteService.create(this.nuevoCliente)
      .subscribe(() => {
        this.load();
        this.nuevoCliente = {
          identificacion: '',
          nombres: '',
          apellidos: '',
          email: '',
          telefono: '',
          direccion: ''
        }
      })
  }

  edit(clientes: any) {
    this.clientes = clientes
  }

  delete(data: any) {
    this.clienteService.delete(data._links.self.href)
    .subscribe(() => {
      this.clienteService.getAll();
    });
  }

}

