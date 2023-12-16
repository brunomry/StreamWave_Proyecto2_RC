// se creó la clase usuario para de ella poder crear los usuarios con la funcion registro.
class Usuario {
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
// Se creó el usuario administrador para que cumpla su funcion en la página. Ademas se declaran variables
const administrador = new Usuario(
  "Administrador Supremo",
  "mail@outlook.com",
  "12345678",
  "administrador"
);
const usuario = new Usuario(
  "Un ser mortal",
  "usuario@mail.com",
  "87654321",
  "usuario"
);

// Se añadio el archivo db que contiene el array de usuarios totales
const db = {
  usuarios: [administrador, usuario],
  canciones: [],
  categorias: [
    "Nuevos Lanzamientos",
    "Lo más escuchado",
    "Clásicos inolvidables",
    "Rock Nacional",
  ],
};

// Se crean los selectores de los elementos html
const formularioDeIngreso = document.querySelector(`#formularioDeIngreso`);
const correo = document.querySelector(`#correo`);
const clave = document.querySelector(`#clave`);
 // Se crean los eventos, funciones y declaran variables
let sesionActual = JSON.parse(localStorage.getItem(`sesionKey`)) || [];

function guardarEnLocalStorage() {
  localStorage.setItem(`sesionKey`, JSON.stringify(sesionActual));
}