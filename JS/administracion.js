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
