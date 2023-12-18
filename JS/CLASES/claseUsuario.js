export class Usuario {
  constructor(nombreProp, correoProp, contraseniaProp, rolProp) {
    this.nombre_ = nombreProp;
    this.correo_ = correoProp;
    this.contrasenia_ = contraseniaProp;
    this.rol_ = rolProp;
  }
  get getNombre() {
    return this.nombre_;
  }
  get getCorreo() {
    return this.correo_;
  }
  get getContrasenia() {
    return this.contrasenia_;
  }
  get getRol() {
    return this.rol_;
  }
  set setNombre(nombre) {
    this.nombre_ = nombre;
  }
  set setCorreo(correo) {
    this.correo_ = correo;
  }
  set setContrasenia(contrasenia) {
    this.contrasenia_ = contrasenia;
  }
  set setRol(rol) {
    this.rol_ = rol;
  }
}