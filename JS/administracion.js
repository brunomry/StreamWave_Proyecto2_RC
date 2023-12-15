import db from "../JS/db.js";
import { Cancion } from "../JS/CLASES/claseCancion.js";

const canciones = JSON.parse(localStorage.getItem("cancionesKey")) || []

const cargarDB = () =>{
  localStorage.setItem("cancionesKey", JSON.stringify(db.canciones))
  localStorage.setItem("categorias", JSON.stringify(db.categorias))
  localStorage.setItem("usuarios", JSON.stringify(db.usuarios))
}

cargarDB()

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
  canciones.length > 0 
    ? canciones.map((cancion, posicion) => agregarFila(cancion, posicion + 1))
    : null
}

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
                                  <button class="btn btnEditar">Editar</button>
                                  <button class="btn btnEliminar" onclick="eliminarCancion('${cancion.id}')">Eliminar</button>
                                </td>
                              </tr>`;
}

window.eliminarCancion = (idCancion) => {

  //busco por id la cancion y guardo su posicion
  const posicionCancionBuscada = canciones.findIndex((cancion) => cancion.id === idCancion);
  console.log(posicionCancionBuscada);

  //elimino del arreglo la cancion
  canciones.splice(posicionCancionBuscada,1);
  guardarEnLocalstorage();

  //borro la fila de la tabla
  const tablaCancion = document.querySelector('tbody');
  console.log(tablaCancion.children[posicionCancionBuscada])
  tablaCancion.removeChild(tablaCancion.children[posicionCancionBuscada])

}

formularioCanciones.addEventListener("submit", crearCancion);
cargarFilas();