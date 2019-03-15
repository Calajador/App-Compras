import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutentificacionService } from '../../servicios/autentificacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})
export class InisesComponent implements OnInit {

  loginForm: FormGroup;
  userdata: any;

  constructor(private formBu: FormBuilder, private _auth: AutentificacionService,
    private _router: Router, private _acroute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBu.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.userdata = this.saveUserData();

    this._auth.inicioSesion(this.userdata);
  }

  saveUserData() {
    const saveUserData = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    return saveUserData;
  }

}
