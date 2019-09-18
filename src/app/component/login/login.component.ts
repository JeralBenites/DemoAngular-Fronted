import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';
import {Usuario} from '../../model/usuario';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  constructor( private formBuilder: FormBuilder,
               private loginService: LoginService,
               private router: Router ) { }

  ngOnInit() {
      this.frmLogin = this.formBuilder.group({
      usuario: ['INV', [Validators.required, Validators.minLength(5)]],
      clave: ['abc', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {

    const usuario = this.f.usuario.value;
    const clave   = this.f.clave.value;

    const oUsuario: Usuario = new Usuario(usuario, clave);


    this.loginService.login(oUsuario)
      .subscribe((response) => {
          this.router.navigate(['/album-listado']);
          console.log('Login OK');
          console.log('response' + response);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
          }
        });

  }

  get f() {
    return this.frmLogin.controls;
  }


}
