const id = window.location.search;
const array = Array.from(id);
const idCancion = array.splice(4, array.length).join("");

const canciones = JSON.parse(localStorage.getItem("cancionesKey")) || [];

const cancionEncontrada = canciones.find(cancion =>  cancion.id === idCancion);