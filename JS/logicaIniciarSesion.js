import db from "./db.js";
import { Usuario } from "./CLASES/claseUsuario.js";

const formularioDeIngreso = document.querySelector(`#formularioDeIngreso`);
const correo = document.querySelector(`#correo`);
const clave = document.querySelector(`#clave`);

let sesionActual = JSON.parse(localStorage.getItem(`sesionKey`)) || [];

function guardarEnLocalStorage() {
  localStorage.setItem(`sesionKey`, JSON.stringify(sesionActual));
}

formularioDeIngreso.addEventListener(`submit`, validar);

function validar(e) {
  e.preventDefault();
  const encontrarUsuario = db.usuarios.findIndex(
    (usuario) =>
      usuario.contrasenia_ === clave.value && usuario.correo_ === correo.value
  );
  if (
    db.usuarios[encontrarUsuario] &&
    db.usuarios[encontrarUsuario].correo_ &&
    db.usuarios[encontrarUsuario].contrasenia_
  ) {
    if (
      correo.value === db.usuarios[encontrarUsuario].correo_ &&
      clave.value === db.usuarios[encontrarUsuario].contrasenia_ &&
      db.usuarios[encontrarUsuario].rol_ === "administrador"
    ) {
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión correcto",
        text: "Iniciaste sesión como administrador",
        confirmButtonColor: "#2FA4D8",
      }).then((result) => {
        if (result.isConfirmed) {
          sesionActual.push(db.usuarios[encontrarUsuario]);
          guardarEnLocalStorage();
          location.href = "../PAGES/administracion.html";
        }
      });
    } else if (
      correo.value === db.usuarios[encontrarUsuario].correo_ &&
      clave.value === db.usuarios[encontrarUsuario].contrasenia_ &&
      db.usuarios[encontrarUsuario].rol_ === "usuario"
    ) {
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión correcto",
        text: "Iniciaste sesión como usuario",
        confirmButtonColor: "#2FA4D8",
      }).then((result) => {
        if (result.isConfirmed) {
          sesionActual.push(db.usuarios[encontrarUsuario]);
          guardarEnLocalStorage();
          location.href = "../index.html";
        }
      });
    }
  } else {
    Swal.fire({
      icon: "warning",
      title: "No se encontró el usuario",
      text: "Verifica las credenciales",
      confirmButtonColor: "#2FA4D8",
      footer: '<a href="../PAGES/error404">Crea una cuenta</a>',
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      }
    });
  }
}
