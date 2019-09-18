export class Usuario {

   id: number;
   usuario: string;
   clave: string;

  constructor(usuario: string, clave: string) {
    this.usuario = usuario;
    this.clave = clave;
  }

}
