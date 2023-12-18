const opcionesSinUsuarioLG = document.getElementById(`opcionesSinUsuarioLG`);
const opcionesConUsuarioLG = document.getElementById(`opcionesConUsuarioLG`);
const opcionesSinUsuarioMD = document.getElementById(`opcionesSinUsuarioMD`);
const opcionesConUsuarioMD = document.getElementById(`opcionesConUsuarioMD`);
const btnCerrarSesion = document.querySelectorAll(`.btnCerrarSesion`);
const opcionesUsuarioNavHorizontal1 = document.getElementById(
  `opcionesUsuarioNavHorizontal1`
);
const opcionesUsuarioNavHorizontal2 = document.getElementById(
  `opcionesUsuarioNavHorizontal2`
);

let sesionActual = JSON.parse(localStorage.getItem(`usuarios`)) || [];

function verificarRolUsuario() {
  if (sesionActual.length > 0) {
    let usuarioEncontrado = sesionActual[0];
    if (usuarioEncontrado.rol_ === "administrador") {
      console.log("El usuario ingresado tiene permisos de administrador");
      opcionesSinUsuarioLG.className = `navbar-nav mb-2 mb-lg-0 d-none`;
      opcionesConUsuarioLG.className = `navbar-nav mb-2 mb-lg-0 botonDropdown`;
      opcionesSinUsuarioMD.className = `d-none`;
      opcionesConUsuarioMD.className = `nav-item dropdown text-center`;
      opcionesUsuarioNavHorizontal1.innerHTML = `<li>
        <a class="dropdown-item" href="administracion.html">Administración</a>
      </li>
      <li>
          <a class="dropdown-item" href="error404.html">Administrar cuenta</a>
          </li>
      <li>
        <a class="dropdown-item btnCerrarSesion" onClick="cerrarSesion()">Cerrar sesión</a>
      </li>`;
      opcionesUsuarioNavHorizontal2.innerHTML = `<li>
        <a class="dropdown-item" href="administracion.html">Administración</a>
      </li>
      <li>
          <a class="dropdown-item" href="error404.html">Administrar cuenta</a>
          </li>
      <li>
        <a class="dropdown-item btnCerrarSesion" onClick="cerrarSesion()">Cerrar sesión</a>
      </li>
      `;
    } else if (usuarioEncontrado.rol === "usuario") {
      console.log("El usuario ingresado no tiene permisos de administrador");
      opcionesSinUsuarioLG.className = `navbar-nav mb-2 mb-lg-0 d-none`;
      opcionesConUsuarioLG.className = `navbar-nav mb-2 mb-lg-0 botonDropdown`;
      opcionesSinUsuarioMD.className = `d-none`;
      opcionesConUsuarioMD.className = `nav-item dropdown text-center`;
      opcionesUsuarioNavHorizontal1.innerHTML = `<li>
        <a class="dropdown-item" href="error404.html">Administrar cuenta</a>
      </li>
      <li>
        <a class="dropdown-item btnCerrarSesion" onClick="cerrarSesion()">Cerrar sesión</a>
      </li>`;
    }
  } else {
    console.log("No has iniciado sesion");
    opcionesSinUsuarioLG.className = `navbar-nav mb-2 mb-lg-0`;
    opcionesConUsuarioLG.className = `navbar-nav mb-2 mb-lg-0 botonDropdown d-none`;
  }
}

function cerrarSesion() {
  sesionActual.shift();
  localStorage.removeItem(`usuarios`);
  verificarRolUsuario();
  console.log("Sesion cerrada");
  window.location.href = window.location.origin + "/index.html";
}

verificarRolUsuario();