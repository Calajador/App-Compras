import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authS: AutentificacionService, private route: Router,
              private aroute: ActivatedRoute) { }

  ngOnInit() {
  }

  isAuth() {
   return this._authS.estaLogeado();
  }

  onLogOut() {
    this._authS.logOut();
    this.route.navigate(['/inicio']);
  }

}
