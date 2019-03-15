import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  frasURL = 'https://comprasapp-6da2f.firebaseio.com/facturas.json';
  fraURL = 'https://comprasapp-6da2f.firebaseio.com/facturas';


  constructor(private http: Http) { }

  postFactura( factura: any) {
    const newfra = JSON.stringify(factura);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.frasURL, newfra, {headers})
      .pipe( map( res => {
        console.log(res.json());
        return res.json();
        }));
  }

  getFacturas() {

    return this.http.get( this.frasURL )
      .pipe( map( res => res.json()));
    }

  getFactura ( id$: string ) {
   const url = `${ this.fraURL }/${ id$ }.json`;
    return this.http.get( url )
    .pipe( map( res => res.json()));
   }

   putFactura( factura: any, id$: string) {
    const newfra = JSON.stringify(factura);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${ this.fraURL }/${ id$ }.json`;

    return this.http.put( url, newfra, {headers})
      .pipe( map( res => {
        console.log(res.json());
        return res.json();
        }));
  }

  delFactura ( id$: string ) {
    const url = `${ this.fraURL }/${ id$ }.json`;
    return this.http.delete( url )
      .pipe( map( res => res.json()));
  }
}
