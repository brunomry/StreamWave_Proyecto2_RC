const canciones = JSON.parse(localStorage.getItem("cancionesKey")) || []

const crearTarjetaCancion = (cancion) => {
  const tarjetaHTML = `<div class="card tarjetaCancion p-3 mb-2">
                        <div class="d-flex flex-column position-relative">
                          <img src="${cancion.imagen}" class="card-img-top rounded-2" alt="${cancion.titulo}" />
                          <div class="btnReproducirCancion">
                            <i class="bi bi-play-circle-fill"></i>
                          </div>
                        </div>
                        <div class="card-body ps-0 pb-0">
                          <h5 class="card-title">${cancion.titulo}</h5>
                          <p class="card-text text-secondary">${cancion.artista}</p>
                        </div>
                      </div>`;

  const tarjeta = document.createElement('div');
  tarjeta.innerHTML = tarjetaHTML;
  return tarjeta;
};

const crearSeccion = (categoria) => {
  const seccion = document.createElement('section');
  seccion.classList.add('mt-5');

  const h2 = document.createElement('h2');
  h2.classList.add('mb-4', 'ms-3', 'ms-md-0');
  h2.textContent = categoria;
  seccion.appendChild(h2);

  return seccion;
}