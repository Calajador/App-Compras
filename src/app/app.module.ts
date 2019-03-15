import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// enviroments
import { environment2 } from './config/firebase.config';
import { environment } from '../environments/environment';
// routes
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
// sevicios
import { ProveedoresService } from './servicios/proveedores.service';
import { PresupuestosService } from './servicios/presupuestos.service';
// componentes
import { ProveedoresComponent } from './componentes/proveedores/proveedores/proveedores.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AddproveeComponent } from './componentes/proveedores/addprovee/addprovee.component';
import { AddpressComponent } from './componentes/presupuestos/addpress/addpress.component';
import { PresupuestosComponent } from './componentes/presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './componentes/presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { ClientesComponent } from './componentes/clientes/clientes/clientes.component';
import { PedidoComponent } from './componentes/clientes/pedido/pedido.component';
// modulos
import { FacturasModule } from './facturas/facturas.module';
import { UploadComponent } from './uploads/upload/upload.component';
import { ContratosComponent } from './uploads/contratos/contratos.component';
import { DetallesComponent } from './uploads/detalles/detalles.component';



@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpressComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    ClientesComponent,
    PedidoComponent,
    UploadComponent,
    ContratosComponent,
    DetallesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes,
    HttpModule,
    FacturasModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ProveedoresService, PresupuestosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
