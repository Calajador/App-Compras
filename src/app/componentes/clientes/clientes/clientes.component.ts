import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../../interfaces/clientes';
import { ClientesService } from '../../../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Clientes [] = [];

  constructor(public _clieS: ClientesService) {

    this._clieS.getCliente()
    .subscribe( clientes => {
      // tslint:disable-next-line:forin
      for ( const id$ in clientes) {
        const p = clientes [id$];
        p.id$ = id$;
        this.clientes.push(clientes [id$]);
      }
    });
  }

  ngOnInit() {
  }

}
