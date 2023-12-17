const id = window.location.search;
const array = Array.from(id);
const idCancion = array.splice(4, array.length).join("");

const canciones = JSON.parse(localStorage.getItem("cancionesKey")) || [];

const cancionEncontrada = canciones.find(cancion =>  cancion.id === idCancion);

const form = document.getElementById("formDetalleCancion")

const categoria = document.querySelector("#categoria");
const titulo = document.querySelector("#tituloCancion");
const artista = document.querySelector("#artistaGrupo");
const anio = document.querySelector("#anioLanzamiento");
const imagen = document.querySelector("#imagenPortada");
const cancion = document.querySelector("#cancion");
const duracion = document.querySelector("#duracion");

for (let i = 0; i < categoria.options.length; i++) {
  if (categoria.options[i].textContent === cancionEncontrada.categoria) {
      categoria.selectedIndex = i;
      break;
  }
}
titulo.value = cancionEncontrada.titulo;
artista.value = cancionEncontrada.artista;
anio.value = cancionEncontrada.anio;
imagen.value = cancionEncontrada.imagen;
cancion.value = cancionEncontrada.cancion;
duracion.value = cancionEncontrada.duracion;