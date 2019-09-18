import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {GenericoService} from './generico.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends GenericoService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  public getAlbums(): any {
    return this.httpClient.get(environment.apiURI + 'album', this.options)
      .pipe(map(data => data)) ;
  }
  public getAlbumsXNombre(nombre: string ): any {
    let params = new HttpParams();
    params = params.append('nombre', nombre );
    this.options.params = params;
    return this.httpClient.get(environment.apiURI + 'album/by-nombre', this.options)
      .pipe(map(data => data)) ;
  }
}
