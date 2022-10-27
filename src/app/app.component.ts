import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  clientes: any[] = [];

  constructor(
    private clienteService: ClientesService
  ) {}
  ngOnInit(): void {
    this.clienteService.getAll()
    .subscribe((data: any) => this.clientes = data._embedded.clientes);
  }


}
