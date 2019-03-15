import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Clientes } from '../interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientesURL = 'https://comprasapp-6da2f.firebaseio.com/clientes.json';

  constructor(private http: Http) { }

  postCliente(cliente: Clientes) {
    const newClie = JSON.stringify(cliente);
    const headers = new Headers ({'ContentType' : 'aplication/json'});

    return this.http.post( this.clientesURL, newClie, {headers})
      .pipe( map( res => {
      return res.json();
    }));
  }

  getCliente() {
    return this.http.get(this.clientesURL)
    .pipe( map( res => res.json()));
  }
}
