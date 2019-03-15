import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PresupuestosService } from '../../../servicios/presupuestos.service';

@Component({
  selector: 'app-addpress',
  templateUrl: './addpress.component.html',
  styleUrls: ['./addpress.component.css']
})
export class AddpressComponent implements OnInit {

  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;

  constructor(private pf: FormBuilder, private ps: PresupuestosService) { }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      cliente: ['', Validators.required],
      fecha: ['', Validators.required],
      concepto: ['', Validators.required],
      base: ['', Validators.required],
      tipo: ['', Validators.required],
      iva: this.iva,
      total: this.total
    });
    this.onChanges();
  }

  onChanges():  void {
    this.presupuestoForm.valueChanges.subscribe(valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
     });
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this.ps.postPresupuesto(this.presupuesto)
          .subscribe(newpres => {

          });
          this.presupuestoForm.reset();
  }

  savePresupuesto() {
    const savePresupuesto = {
      cliente: this.presupuestoForm.get('cliente').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value
    };
    return savePresupuesto;
  }
 }
