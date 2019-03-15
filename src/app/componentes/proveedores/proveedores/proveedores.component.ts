import { Component, OnInit } from '@angular/core';
import {ProveedoresService} from '../../../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: any [] = [];
  cargando = true;

  constructor(public proveedoresService: ProveedoresService) {
    this.proveedoresService.getProveedor()
              .subscribe(proveedores => {
                // tslint:disable-next-line:forin
                for (const id$ in proveedores) {
                  const p = proveedores [id$];
                  p.id$ = id$;
                  this.proveedores.push(proveedores[id$]);
                }
                this.cargando = false;
              });
   }

  ngOnInit() {
    // this.proveedores = this.proveedoresService.getProveedores();
  }

}
