import { Injectable } from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericoService {
  protected options = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('authorization', sessionStorage.getItem('token')),
    params: new HttpParams()
  };
  constructor() { }
}
