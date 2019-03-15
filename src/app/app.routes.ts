import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProveedoresComponent } from './componentes/proveedores/proveedores/proveedores.component';
import { AddproveeComponent } from './componentes/proveedores/addprovee/addprovee.component';
import { AddpressComponent } from './componentes/presupuestos/addpress/addpress.component';
import { PresupuestosComponent } from './componentes/presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './componentes/presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';
import { PedidoComponent } from './componentes/clientes/pedido/pedido.component';
import { ClientesComponent } from './componentes/clientes/clientes/clientes.component';
import { AddfraComponent } from './facturas/facturas/addfra/addfra.component';
import { FacturasComponent } from './facturas/facturas/facturas/facturas.component';
import { UploadComponent } from './uploads/upload/upload.component';
import { ContratosComponent } from './uploads/contratos/contratos.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'clientes', component: ClientesComponent,
  canActivate: [GuardService] },
  { path: 'proveedores', component: ProveedoresComponent,
  canActivate: [GuardService] },
  { path: 'addprovee', component: AddproveeComponent,
  canActivate: [GuardService]},
  { path: 'addpress', component: AddpressComponent,
  canActivate: [GuardService]},
  { path: 'addfra', component: AddfraComponent,
  canActivate: [GuardService]},
  { path: 'editpres/:id', component: EditpresComponent,
  canActivate: [GuardService]},
  { path: 'presupuestos', component: PresupuestosComponent,
  canActivate: [GuardService]},
  { path: 'facturas', component: FacturasComponent},
  { path: 'uploads', component: UploadComponent},
  { path: 'contratos', component: ContratosComponent},
  { path: 'registro', component: RegistroComponent,
  canActivate: [GuardService]},
  { path: 'inises', component: InisesComponent},
  { path: '**', component: InicioComponent }
];



export const AppRoutes = RouterModule.forRoot(routes);
