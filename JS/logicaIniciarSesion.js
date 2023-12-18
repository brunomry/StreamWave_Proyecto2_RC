const formularioDeIngreso = document.querySelector("#formularioDeIngreso");
const correo = document.querySelector("#correo");
const clave = document.querySelector("#clave");

const sesionActual = JSON.parse(localStorage.getItem("usuarios")) || [];
console.log(sesionActual);

function guardarEnLocalStorage() {
  localStorage.setItem("usuarios", JSON.stringify(sesionActual));
}

// function validar(e) {
//   e.preventDefault();

//   let usuarioEncontrado = false;

//   sesionActual.forEach(usuario => {
//     if (usuario.correo_ === correo.value && usuario.contrasenia_ === clave.value) {
//       usuarioEncontrado = true;

//       if (usuarioEncontrado && usuario.rol_ === "administrador") {
//         window.location.href = window.location.origin + "./PAGES/administracion.html";



//       } else if (usuarioEncontrado && usuario.rol_ === "usuario") { 
//         window.location.href = window.location.origin + "/index.html";
//       }
//     }
//   });
// }

formularioDeIngreso.addEventListener("submit", validar);
