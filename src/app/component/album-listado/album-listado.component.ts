import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../../service/album.service';
import {Album} from '../../model/album';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-album-listado',
  templateUrl: './album-listado.component.html',
  styleUrls: ['./album-listado.component.css']
})
export class AlbumListadoComponent implements OnInit {

  frmListado: FormGroup;
  albums: Array<Album> = [];

  constructor(private albumService: AlbumService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.frmListado = this.formBuilder.group({
      nombre : [''],
    });

    this.listar();
  }
  private listar() {
    this.albumService.getAlbums()
    .subscribe(
          data => {
              this.albums = data;
              console.log(this.albums);
          }
    );
  }

  private buscar() {
    debugger;
    const nombre = this.frmListado.controls.nombre.value;
    console.log('nombre ' + nombre);
    this.albumService.getAlbumsXNombre(nombre)
      .subscribe(
        data => {
          this.albums = data;
          console.log(this.albums);
        }
      );
  }
}
