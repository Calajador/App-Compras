import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  presupuestos: any [] = [];

  constructor( public presS: PresupuestosService) {
    this.presS.getPresupuestos()
            .subscribe(presupuestos => {
              // tslint:disable-next-line:forin
              for (const id$ in presupuestos) {
                const p = presupuestos[id$];
                p.id$ = id$;
                this.presupuestos.push(presupuestos[id$]);
              }
            });
  }

  eliminarPresupuesto(id$) {
    this.presS.delpresupuesto(id$)
    .subscribe(res => {
      this.presupuestos = [];
      this.presS.getPresupuestos()
            .subscribe(presupuestos => {
              // tslint:disable-next-line:forin
              // tslint:disable-next-line:no-shadowed-variable
              // tslint:disable-next-line:forin
              // tslint:disable-next-line:no-shadowed-variable
              // tslint:disable-next-line:forin
              for (const id$ in presupuestos) {
                const p = presupuestos[id$];
                p.id$ = id$;
                this.presupuestos.push(presupuestos[id$]);
              }
            });
    });
  }

  ngOnInit() {
  }

}
