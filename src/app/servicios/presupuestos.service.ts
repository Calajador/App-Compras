import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://comprasapp-6da2f.firebaseio.com/presupuestos.json';
  preURL = 'https://comprasapp-6da2f.firebaseio.com/presupuestos';

  constructor(private http: Http) { }

  postPresupuesto(presupuesto: any) {
    const newPres = JSON.stringify(presupuesto);
    const headers = new Headers ({'ContentType' : 'aplication/json'});

    return this.http.post(this.presURL, newPres, {headers}).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }

  getPresupuestos() {
    return this.http.get(this.presURL)
                .pipe(map( res => res.json()));
  }


  getPresupuesto(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url)
            .pipe(map( res => res.json()));

  }

  putpresupuesto(presupuesto: any, id$: string) {
    const newPre = JSON.stringify(presupuesto);
    const headers = new Headers ({'ContentType' : 'aplication/json'});
    const url = `${this.preURL}/${id$}.json`;

    return this.http.put(url, newPre, {headers}).pipe( map( res => {
      return res.json();
    }));

  }

  delpresupuesto(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url)
            .pipe(map( res => res.json()));
  }

}
