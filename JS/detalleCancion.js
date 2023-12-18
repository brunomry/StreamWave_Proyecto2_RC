const id = window.location.search;
const array = Array.from(id);
const idCancion = array.splice(4, array.length).join("");

const informacionCancion = document.getElementsByClassName(`informacionCancion`);

const canciones = JSON.parse(localStorage.getItem("cancionesKey")) || [];

function cargarInformacionCancion() {
    const posicionCancionBuscada = canciones.findIndex(
      (cancion) => cancion.id === idCancion
    );
    console.log(canciones[posicionCancionBuscada].cancion);
    const iFrameDinamico = document.getElementById(`iFrameDinamico`);
    iFrameDinamico.src = canciones[posicionCancionBuscada].cancion;
    informacionCancion[0].textContent = `${canciones[posicionCancionBuscada].titulo}`;
    informacionCancion[1].textContent = `${canciones[posicionCancionBuscada].artista}`;
    informacionCancion[2].textContent = `${canciones[posicionCancionBuscada].categoria}`;
    informacionCancion[3].textContent = `${canciones[posicionCancionBuscada].anio}`;
    informacionCancion[4].textContent = `${canciones[posicionCancionBuscada].duracion}`;
  }
  
cargarInformacionCancion();