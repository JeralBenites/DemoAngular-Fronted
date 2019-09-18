import { Injectable } from '@angular/core';
import {GenericoService} from './generico.service';
import {Usuario} from '../model/usuario';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends GenericoService {

  constructor( private httpClient: HttpClient) {
    super();
  }
  login( usuario: Usuario) {
    const body = JSON.stringify(usuario);
    console.log('body' + body);
    return this.httpClient.post( environment.apiURI + 'login', body, {
      observe: 'response'
    }).pipe(map(res => {

      const token = res.headers.get('authorization');
      console.log('authorization ->' + token);

      sessionStorage.setItem('token', token);

      return res;
    }));
  }
}
