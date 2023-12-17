import db from "../JS/db.js";
import { Cancion } from "./claseCancion.js";

const canciones = JSON.parse(localStorage.getItem("cancionesKey")) || [];

const cargarDB = () => {
  localStorage.setItem("cancionesKey", JSON.stringify(db.canciones));
  localStorage.setItem("categorias", JSON.stringify(db.categorias));
  localStorage.setItem("usuarios", JSON.stringify(db.usuarios));
  location.reload();
};

// boton para cargar local Storage, considerar eliminarlo antes de mergear
const btnCargarDB = document.querySelector(`#btnCargarDB`);
btnCargarDB.addEventListener("click", cargarDB);

// selectores del formulario de agregar cancion
const formularioCanciones = document.querySelector("form");

const categoria = document.querySelector("#categoria");
const titulo = document.querySelector("#tituloCancion");
const artista = document.querySelector("#artistaGrupo");
const anio = document.querySelector("#anioLanzamiento");
const imagen = document.querySelector("#imagenPortada");
const cancion = document.querySelector("#cancion");
const duracion = document.querySelector("#duracion");

// se define un variable que seleccione el modal update
const modalEditarCancion = new bootstrap.Modal(
  document.getElementById("modalEditarCancion")
);
// se define una variable que seleccione el formulario del modal editar
const formModalEditar = document.querySelector(`#formModalEditar`);
// variable que guarde el ID de la cancion a editar
let idCancionEditar = null;

// Funcion para guardar en local Storage
const guardarEnLocalstorage = () => {
  localStorage.setItem("cancionesKey", JSON.stringify(canciones));
};

// Se define un selector de la tabla para la funcion actualizarTabla
const tablaCancion = document.querySelector("#tablaCancion");
// Funciones para actualizar la tabla
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
const cargarFilas = () => {
  tablaCancion.innerHTML = ``
  canciones.length > 0
    ? canciones.map((cancion, posicion) => agregarFila(cancion, posicion + 1))
    : null;
};

// funcion que abre la ventana modal leyendo el id
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
  

  // funcion que aplica los cambios realizados en la ventana modal correspondiente al id de la cancion

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
        console.log("se guardaron los cambios en local storage")
        Swal.fire("Cambios guardados correctamente", "", "success");
  
        modalEditarCancion.hide();
  
      } else if (result.isDenied) {
        Swal.fire("Los cambios no fueron guardados", "", "info");
  
        modalEditarCancion.hide();
      }
    });
  };
  
  // evento del submit de la ventana modal de editar cancion
formModalEditar.addEventListener("submit", editarPropiedadesCancion);
