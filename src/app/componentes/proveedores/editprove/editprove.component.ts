import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProveedoresService } from '../../../servicios/proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editprove',
  templateUrl: './editprove.component.html',
  styleUrls: ['./editprove.component.css']
})
export class EditproveComponent implements OnInit {


  @ViewChild('formpro') formpro: NgForm;
  proveedor: any;
  id: string;

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

  constructor( private proS: ProveedoresService,
    private router: Router, private actiRoute: ActivatedRoute) {

      this.actiRoute.params.subscribe(parametros => {
        this.id = parametros ['id'];
        this.proS.getProveedor().subscribe( proveedor => this.proveedor = proveedor);

      });

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
                this.router.navigate(['/proveedores']);
              });

    this.formpro.reset();
  }

}
