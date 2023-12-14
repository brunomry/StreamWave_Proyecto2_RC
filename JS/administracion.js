import db from "../JS/db.js";
import { Cancion } from "../JS/CLASES/claseCancion.js";

const canciones = db.canciones || [];

const formularioCanciones = document.querySelector("form");

const categoria = document.querySelector("#categoria");
const titulo = document.querySelector("#tituloCancion");
const artista = document.querySelector("#artistaGrupo");
const anio = document.querySelector("#anioLanzamiento");
const imagen = document.querySelector("#imagenPortada");
const cancion = document.querySelector("#cancion");
const duracion = document.querySelector("#duracion");
console.log(formularioCanciones);

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
  guardarEnLocalstorage();
  console.log(canciones);
  limpiarFormulario();
};

const guardarEnLocalstorage = () => {
  localStorage.setItem("cancionesKey", JSON.stringify(canciones));
};

const limpiarFormulario = () => formularioCanciones.reset();

const cargarFilas = () => {
  canciones.length 
    ? canciones.map((cancion, posicion) => {
      // agregarFila(cancion, posicion + 1)
      })
    : null
}

formularioCanciones.addEventListener("submit", crearCancion);
cargarFilas();