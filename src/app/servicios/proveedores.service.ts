import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {



proveeUrl = 'https://comprasapp-6da2f.firebaseio.com/poveedores.json';

  constructor(private http: Http) { }

  postProveedor(proveedor: any) {
    const newPres = JSON.stringify(proveedor);
    const headers = new Headers ({'ContentType' : 'aplication/json'});

    return this.http.post(this.proveeUrl, newPres, {headers}).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }

 getProveedor () {
  return this.http.get(this.proveeUrl)
            .pipe(map( res => res.json()));
 }
}
