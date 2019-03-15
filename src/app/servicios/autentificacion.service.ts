import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute  } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  constructor( private _actiRoute: ActivatedRoute, private _router: Router) {}

    registroUsuario(userdata) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(userdata.email, userdata.password)
          .catch(error => {
            console.log(error);
          });
   }

   inicioSesion(userdata) {
     firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
            .then( res => {
                console.log(res);
                this._router.navigate(['/inicio']);
            }).catch( error => {
              console.log(error);
            });
   }

   estaLogeado() {
     const user = firebase.auth().currentUser;
     if (user) {
       return true;
     } else {
       return false;
     }
   }

   logOut() {
     firebase.auth().signOut();
   }
}
