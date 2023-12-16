const id = window.location.search;
const array = Array.from(id);
const idCancion = array.splice(4, array.length).join("");

const canciones = JSON.parse(localStorage.getItem("cancionesKey")) || [];

const cancionEncontrada = canciones.find(cancion =>  cancion.id === idCancion);

const form = document.getElementById("formDetalleCancion")

const categoria = form.querySelector("#categoria");
const titulo = form.querySelector("#tituloCancion");
const artista = form.querySelector("#artistaGrupo");
const anio = form.querySelector("#anioLanzamiento");
const imagen = form.querySelector("#imagenPortada");
const cancion = form.querySelector("#cancion");
const duracion = form.querySelector("#duracion");

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