import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../component/login/login.component';
import {AppComponent} from '../app.component';
import {AlbumListadoComponent} from '../component/album-listado/album-listado.component';
import {AlbumRegistroComponent} from '../component/album-registro/album-registro.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'album-listado',
    component: AlbumListadoComponent
  },
  {
    path: 'album-registro/:id',
    component: AlbumRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
