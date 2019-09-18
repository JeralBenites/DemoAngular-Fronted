export class Album {
  private _codigo: number; // private long codigo;
  private _nombre: string;
  private _descripcion: string;
  private _estado: string;


  constructor(codigo: number, nombre: string, descripcion: string, estado: string) {
    this._codigo = codigo;
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._estado = estado;
  }

  get codigo(): number {
    return this._codigo;
  }

  set codigo(value: number) {
    this._codigo = value;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion(value: string) {
    this._descripcion = value;
  }

  get estado(): string {
    return this._estado;
  }

  set estado(value: string) {
    this._estado = value;
  }
}
