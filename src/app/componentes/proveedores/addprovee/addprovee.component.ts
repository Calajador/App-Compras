import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProveedoresService } from '../../../servicios/proveedores.service';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  @ViewChild('formpro') formpro: NgForm;
  proveedor: any;

  provincias: String[] = [
    'Álava', 'Albacete', 'Alicante', 'Almería',
    'Asturias', 'Ávila', 'Badajoz', 'Barcelona',
     'Burgos', 'Cáceres', 'Cádiz', 'Cantabria',
     'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña',
     'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa',
     'Huelva', 'Huesca', 'IslasBaleares', 'Jaén', 'León', 'Lérida', 'Lugo',
     'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas',
      'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria',
      'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia',
       'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'
  ];

  constructor( private proS: ProveedoresService) {
    this.proveedor = {
      nombre: '',
      cif: '',
      direccion: '',
      cp: '',
      localidad: '',
      provincia: '',
      telefono: null,
      email: '',
      contacto: ''

    };
   }

  ngOnInit() {
  }

  onSubmit() {
    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.cif = this.formpro.value.cif;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.cp = this.formpro.value.cp;
    this.proveedor.localidad = this.formpro.value.localidad;
    this.proveedor.provincia = this.formpro.value.provincia;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.email = this.formpro.value.email;
    this.proveedor.contacto = this.formpro.value.contacto;

    this.proS.postProveedor(this.proveedor)
              .subscribe( newpro => {

              });

    this.formpro.reset();
  }

}
