import { Injectable } from '@angular/core';
import { AutentificacionService } from './autentificacion.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private _authS: AutentificacionService) { }

  canActivate(  _activa: ActivatedRouteSnapshot,  _route: RouterStateSnapshot) {

    return this._authS.estaLogeado();
    }
}
