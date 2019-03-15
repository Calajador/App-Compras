import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddfraComponent } from './facturas/addfra/addfra.component';
import { Routes, RouterModule } from '@angular/router';
import { FacturasComponent } from './facturas/facturas/facturas.component';
import { EditfraComponent } from './facturas/editfra/editfra.component';
import { FacturasService } from './facturas.service';


const routes: Routes = [
  { path: 'facturas', component: FacturasComponent },
  { path: 'addfra', component: AddfraComponent },
  { path: 'editfra/:id', component: EditfraComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AddfraComponent, FacturasComponent, EditfraComponent],
  providers: [FacturasService]
})
export class FacturasModule { }
