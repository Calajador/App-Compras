import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Clientes } from '../../../interfaces/clientes';
import { ClientesService } from '../../../servicios/clientes.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  @ViewChild('formpro') formpro: NgForm;
  cliente: Clientes;

  constructor(private _clieS: ClientesService) {
    this.cliente = {
      Nombre: '',
      Direccion: '',
      CP: null,
      Localidad: '',
      Tel: null,
      Metros: null,
      Cuartos: null,
      Colores: null,
      Mural: '',
      Descripcion: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.cliente.Nombre = this.formpro.value.nombre;
    this.cliente.Direccion = this.formpro.value.direccion;
    this.cliente.CP = this.formpro.value.cp;
    this.cliente.Localidad = this.formpro.value.localidad;
    this.cliente.Tel = this.formpro.value.telefono;
    this.cliente.Metros = this.formpro.value.metros;
    this.cliente.Cuartos = this.formpro.value.cuartos;
    this.cliente.Colores = this.formpro.value.colores;
    this.cliente.Mural = this.formpro.value.descripcion;

    this._clieS.postCliente( this.cliente)
          .subscribe( newclie => {

          });

          this.formpro.reset();
  }

}
