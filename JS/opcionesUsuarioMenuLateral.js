// Se declaran selectores
const opcionesSinUsuarioLG = document.getElementById(`opcionesSinUsuarioLG`);
const opcionesConUsuarioLG = document.getElementById(`opcionesConUsuarioLG`);
const opcionesSinUsuarioMD = document.getElementById(`opcionesSinUsuarioMD`);
const opcionesConUsuarioMD = document.getElementById(`opcionesConUsuarioMD`);
const opcionesUsuarioMenuLateral1 = document.getElementById(
  `opcionesUsuarioMenuLateral1`
);
const opcionesUsuarioMenuLateral2 = document.getElementById(
  `opcionesUsuarioMenuLateral2`
);
// const btnIniciarSesionBody = document.getElementById(`btnIniciarSesionBody`);

// Se declaran funciones y variables
function verificarRolUsuario() {
  if (sesionActual.length > 0) {
    let usuarioEncontrado = sesionActual[0];
    if (usuarioEncontrado.rol_ === "administrador") {
      console.log("El usuario ingresado tiene permisos de administrador");
      opcionesSinUsuarioLG.className = `navbar-nav mb-2 mb-lg-0 d-flex flex-column d-none`;
      opcionesConUsuarioLG.className = `navbar-nav mb-2 mb-lg-0 botonDropdown`;
      opcionesSinUsuarioMD.className = `d-none`;
      opcionesConUsuarioMD.className = `nav-item dropdown text-center`;
      opcionesUsuarioMenuLateral1.innerHTML = `
        <li>
          <a class="dropdown-item" href="administracion.html">Administración</a>
          </li>
          <li>
          <a class="dropdown-item" href="error404.html">Administrar cuenta</a>
          </li>
          <li>
              <a class="dropdown-item" onClick="cerrarSesion()">Cerrar sesión</a>
          </li>`;
      opcionesUsuarioMenuLateral2.innerHTML = `
      <li>
          <a class="dropdown-item" href="administracion.html">Administrar</a>
          </li>
          <li>
          <a class="dropdown-item" href="error404.html">Administrar cuenta</a>
          </li>
          <li>
              <a class="dropdown-item" onClick="cerrarSesion()">Cerrar sesión</a>
          </li>`;
          // btnIniciarSesionBody.hidden = true
    } else if (usuarioEncontrado.rol_ === "usuario") {
      console.log("El usuario ingresado no tiene permisos de administrador");
      opcionesSinUsuarioLG.className = `navbar-nav mb-2 mb-lg-0 d-flex flex-column d-none`;
      opcionesConUsuarioLG.className = `navbar-nav mb-2 mb-lg-0 botonDropdown`;
      opcionesSinUsuarioMD.className = `d-none`;
      opcionesConUsuarioMD.className = `nav-item dropdown text-center`;
      opcionesConUsuarioMD.className = `nav-item dropdown text-center`;
      opcionesUsuarioMenuLateral1.innerHTML = `
        <li>
          <a class="dropdown-item" href="error404.html">Administrar cuenta</a>
          </li>
          <li>
              <a class="dropdown-item" onClick="cerrarSesion()">Cerrar sesión</a>
          </li>`;
      opcionesUsuarioMenuLateral2.innerHTML = `
      <li>
          <a class="dropdown-item" href="error404.html">Administrar cuenta</a>
          </li>
          <li>
              <a class="dropdown-item" onClick="cerrarSesion()">Cerrar sesión</a>
          </li>`;
          // btnIniciarSesionBody.hidden = true
    }
  } else {
    console.log("No has iniciado sesion");
    opcionesSinUsuarioLG.className = `navbar-nav mb-2 mb-lg-0 d-flex flex-column`;
    opcionesConUsuarioLG.className = `navbar-nav mb-2 mb-lg-0 botonDropdown d-none`;
    // btnIniciarSesionBody.hidden = false
  }
}

function cerrarSesion() {
  sesionActual.shift();
  localStorage.removeItem(`sesionKey`);
  verificarRolUsuario();
  console.log("Sesion cerrada");
  location.href = "../index.html";
}

verificarRolUsuario();