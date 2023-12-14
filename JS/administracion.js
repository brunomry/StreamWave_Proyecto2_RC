import db from "../JS/db.js";
import { Cancion } from "../JS/CLASES/claseCancion.js";

let canciones = db.canciones;

const formularioCanciones = document.querySelector("form");

const categoria = document.querySelector("#categoria");
const titulo = document.querySelector("#tituloCancion");
const artista = document.querySelector("#artistaGrupo");
const anio = document.querySelector("#anioLanzamiento");
const imagen = document.querySelector("#imagenPortada");
const cancion = document.querySelector("#cancion");
const duracion = document.querySelector("#duracion");

const crearCancion = (e) => {
  e.preventDefault();
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
  canciones.push(cancionNueva);
  agregarFila(cancionNueva,canciones.length);
  guardarEnLocalstorage();
  limpiarFormulario();
};

const guardarEnLocalstorage = () => {
  localStorage.setItem("cancionesKey", JSON.stringify(canciones));
};

const limpiarFormulario = () => formularioCanciones.reset();

const cargarFilas = () => {
  canciones.length 
    ? canciones.map((cancion, posicion) => {
      agregarFila(cancion, posicion + 1)
      })
    : null
}

const agregarFila = (cancion, posicion) => {
  const tablaCancion = document.querySelector("#tablaCancion");
  tablaCancion.innerHTML += `<tr>
                                <td>${posicion}</td>
                                <td>${cancion.getTitulo}</td>
                                <td>${cancion.getArtista}</td>
                                <td>${cancion.getCategoria}</td>
                                <td class="d-none d-lg-table-cell">${cancion.getDuracion}</td>
                                <td class="d-none d-lg-table-cell">${cancion.getAnio}</td>
                                <td class="text-center"><img class="imgCancion rounded-3" src="${cancion.getImagen}"></td>
                                <td
                                  class="text-center text-dark d-flex flex-column align-items-center justify-content-center gap-2"
                                >
                                  <button class="btn btnVerMas" onclick="verDetalleCancion('${cancion.getId}')">Ver más</button>
                                  <button class="btn btnEditar">Editar</button>
                                  <button class="btn btnEliminar" onclick="eliminarCancion('${cancion.getId}')">Eliminar</button>
                                </td>
                              </tr>`;
}

formularioCanciones.addEventListener("submit", crearCancion);
cargarFilas();