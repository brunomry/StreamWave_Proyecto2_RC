// Se crean selectores necesarios

const informacionCancion = document.getElementsByClassName(`informacionCancion`);

const canciones = JSON.parse(localStorage.getItem("cancionesKey")) || []

function cargarInformacionCancion(cancion){
    informacionCancion[0].textContent = `${cancion.titulo}`
    informacionCancion[1].textContent = `${cancion.artista}`
    informacionCancion[2].textContent = `${cancion.categoria}`
    informacionCancion[3].textContent = `${cancion.anio}`
    informacionCancion[4].textContent = `${cancion.duracion}`
}