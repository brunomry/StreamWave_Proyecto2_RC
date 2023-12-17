import db from "../JS/db.js";
import { Cancion } from "./claseCancion.js";
import {regEx, validarAnio, validarArtista, validarCategoria, validarDuracion, validarTitulo, validarUrlCancion, validarUrlImagen} from "./validaciones.js"

const canciones = JSON.parse(localStorage.getItem("cancionesKey")) || [];

// const cargarDB = () => {
//    localStorage.setItem("cancionesKey", JSON.stringify(db.canciones));
//    localStorage.setItem("categorias", JSON.stringify(db.categorias));
//    localStorage.setItem("usuarios", JSON.stringify(db.usuarios));
//    location.reload();
//  };

// const btnCargarDB = document.querySelector(`#btnCargarDB`)
// btnCargarDB.addEventListener("click", cargarDB)
//   localStorage.setItem("cancionesKey", JSON.stringify(db.canciones));
//   localStorage.setItem("categorias", JSON.stringify(db.categoria));
//   localStorage.setItem("usuarios", JSON.stringify(db.usuarios));
// };

// cargarDB();

const formularioCanciones = document.querySelector("form");

const categoria = document.querySelector("#categoria");
const titulo = document.querySelector("#tituloCancion");
const artista = document.querySelector("#artistaGrupo");
const anio = document.querySelector("#anioLanzamiento");
const imagen = document.querySelector("#imagenPortada");
const cancion = document.querySelector("#cancion");
const duracion = document.querySelector("#duracion");

const modalEditarCancion = new bootstrap.Modal(
  document.getElementById("modalEditarCancion")
);

const formModalEditar = document.querySelector(`#formModalEditar`);

let idCancionEditar = null;

const guardarEnLocalstorage = () => {
  localStorage.setItem("cancionesKey", JSON.stringify(canciones));
};

const tablaCancion = document.querySelector("#tablaCancion");

const cargarFilas = () => {
  tablaCancion.innerHTML = ``
  canciones.length > 0
    ? canciones.map((cancion, posicion) => agregarFila(cancion, posicion + 1))
    : null;
};

window.editarCancion = (id) => {
  idCancionEditar = id;
  const posicionCancionBuscada = canciones.findIndex(
    (cancion) => cancion.id === idCancionEditar
  );
  document.querySelector("#categoriaEditar").value =
    canciones[posicionCancionBuscada].categoria;
  document.querySelector("#tituloCancionEditar").value =
    canciones[posicionCancionBuscada].titulo;
  document.querySelector("#artistaGrupoEditar").value =
    canciones[posicionCancionBuscada].artista;
  document.querySelector("#anioLanzamientoEditar").value =
    canciones[posicionCancionBuscada].anio;
  document.querySelector("#imagenPortadaEditar").value =
    canciones[posicionCancionBuscada].imagen;
  document.querySelector("#cancionEditar").value =
    canciones[posicionCancionBuscada].cancion;
  document.querySelector("#duracionEditar").value =
    canciones[posicionCancionBuscada].duracion;
  modalEditarCancion.show();
};

const editarPropiedadesCancion = (e) => {
  e.preventDefault();

  Swal.fire({
    title: "¿Quieres guardar los cambios?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Guardar cambios",
    denyButtonText: `No guardar`,
  }).then((result) => {
    if (result.isConfirmed) {
      const posicionCancionBuscada = canciones.findIndex(
        (cancion) => cancion.id === idCancionEditar
      );
      canciones[posicionCancionBuscada].categoria =
        document.querySelector("#categoriaEditar").value;
      canciones[posicionCancionBuscada].titulo = document.querySelector(
        "#tituloCancionEditar"
      ).value;
      canciones[posicionCancionBuscada].artista = document.querySelector(
        "#artistaGrupoEditar"
      ).value;
      canciones[posicionCancionBuscada].anio = document.querySelector(
        "#anioLanzamientoEditar"
      ).value;
      canciones[posicionCancionBuscada].imagen = document.querySelector(
        "#imagenPortadaEditar"
      ).value;
      canciones[posicionCancionBuscada].cancion =
        document.querySelector("#cancionEditar").value;
      canciones[posicionCancionBuscada].duracion =
        document.querySelector("#duracionEditar").value;
      guardarEnLocalstorage();
      cargarFilas();
      Swal.fire("Cambios guardados correctamente", "", "success");

      modalEditarCancion.hide();

    } else if (result.isDenied) {
      Swal.fire("Los cambios no fueron guardados", "", "info");

      modalEditarCancion.hide();
    }
  });
};

const crearCancion = (e) => {
  e.preventDefault();

  if (
    validarTitulo(titulo.value) &&
    validarAnio(anio.value) &&
    validarArtista(artista.value) &&
    validarCategoria(categoria.value) &&
    validarDuracion(duracion.value) &&
    validarTitulo(titulo.value) &&
    validarUrlCancion(cancion.value) &&
    validarUrlImagen(imagen.value)
  ) {
    const cancionNueva = new Cancion(
      crypto.randomUUID(),
      categoria.value,
      titulo.value,
      artista.value,
      anio.value,
      duracion.value,
      imagen.value,
      cancion.value
    );

    const cancionEncontrada = buscarCancion(cancionNueva);

    if (cancionEncontrada) {
      Swal.fire("La canción que deseas agregar ya existe!");
    } else {
      canciones.push(cancionNueva);
      agregarFila(cancionNueva, canciones.length);
      guardarEnLocalstorage();
      limpiarFormulario();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "La canción fue registrada con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
};

const limpiarFormulario = () => formularioCanciones.reset();

const agregarFila = (cancion, posicion) => {
  const tablaCancion = document.querySelector("#tablaCancion");
  tablaCancion.innerHTML += `<tr>
                                <td>${posicion}</td>
                                <td>${cancion.titulo}</td>
                                <td>${cancion.artista}</td>
                                <td>${cancion.categoria}</td>
                                <td class="d-none d-lg-table-cell">${cancion.duracion}</td>
                                <td class="d-none d-lg-table-cell">${cancion.anio}</td>
                                <td class="text-center"><img class="imgCancion rounded-3" src="${cancion.imagen}"></td>
                                <td
                                  class="text-center text-dark d-flex flex-column align-items-center justify-content-center gap-2"
                                >
                                  <button class="btn btnVerMas" onclick="verDetalleCancion('${cancion.id}')">Ver más</button>
                                  <button class="btn btnEditar" onclick="editarCancion('${cancion.id}')">Editar</button>
                                  <button class="btn btnEliminar" onclick="eliminarCancion('${cancion.id}')">Eliminar</button>
                                </td>
                              </tr>`;
};

window.eliminarCancion = (idCancion) => {
  Swal.fire({
    title: "¿Estas seguro de querer borrar esta canción?",
    text: "Una vez borrada la canción no podrás volver atrás",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const posicionCancionBuscada = canciones.findIndex(
        (cancion) => cancion.id === idCancion
      );
      canciones.splice(posicionCancionBuscada, 1);
      guardarEnLocalstorage();

      const tablaCancion = document.querySelector("tbody");
      tablaCancion.removeChild(tablaCancion.children[posicionCancionBuscada]);
      Swal.fire({
        title: "Canción eliminada con éxito",
        text: "La canción seleccionada fué eliminada con éxito",
        icon: "success",
      });
    }
  });
};

window.verDetalleCancion = id => {
  window.location.href =
    window.location.origin + "/PAGES/verMasDetalleCancion.html?id=" + id;
};

formularioCanciones.addEventListener("submit", crearCancion);
cargarFilas();

formModalEditar.addEventListener("submit", editarPropiedadesCancion);

