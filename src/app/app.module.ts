import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import {AlbumListadoComponent} from './component/album-listado/album-listado.component';
import {AlbumRegistroComponent} from './component/album-registro/album-registro.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent } from './component/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListadoComponent,
    AlbumRegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
