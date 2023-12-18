import db from "../JS/db.js";

const canciones = JSON.parse(localStorage.getItem("cancionesKey")) || [];

const estadoDB = false;

const cargarDB = () => {
  localStorage.setItem("cancionesKey", JSON.stringify(db.canciones));
  localStorage.setItem("categorias", JSON.stringify(db.categorias));
  localStorage.setItem("usuarios", JSON.stringify(db.usuarios));
  location.reload();
};

function recargarLocalStorage() {
  if (canciones.length < 1 && estadoDB === false) {
    cargarDB();
    estadoDB = true;
  } else if (canciones.length > 1 && estadoDB === true) estadoDB = false;
}
recargarLocalStorage();

const verCancion = idTarjeta => {
  idTarjeta = idTarjeta.trim();
  window.location.href =
    window.location.origin + `/PAGES/detalleCancion.html?id=${idTarjeta}`;
}

const crearTarjetaCancion = (cancion) => {
  const tarjetaHTML = `<div class="card tarjetaCancion p-3 mb-2" id="${cancion.id}">
                        <div class="d-flex flex-column position-relative">
                          <img src="${cancion.imagen}" class="card-img-top rounded-2" alt="${cancion.titulo}" />
                        </div>
                        <div class="card-body ps-0 pb-0">
                          <h5 class="card-title">${cancion.titulo}</h5>
                          <p class="card-text text-secondary">${cancion.artista}</p>
                        </div>
                      </div>`;

  const tarjeta = document.createElement('div');
  tarjeta.innerHTML = tarjetaHTML;

  tarjeta.addEventListener("click", () => verCancion(cancion.id))

  return tarjeta;
};

const seccion = document.createElement('section');

const crearSeccion = (categoria) => {
 
  seccion.classList.add("mt-5");

  const h2 = document.createElement('h2');
  h2.classList.add("mb-4", "ms-3", "ms-md-0");
  h2.textContent = categoria;
  seccion.appendChild(h2);

  return seccion;
}

const contenedorCatalogo = document.getElementById("contenedorCatalogo");

JSON.parse(localStorage.getItem("categorias")).forEach((categoria) => {

  const cancionesCategoria = canciones.filter(cancion => cancion.categoria === categoria);

  const seccion = crearSeccion(categoria);
  const h2 = seccion.querySelector("h2");

  const carruselMobile = document.createElement("div");
  carruselMobile.classList.add("carruselCategoria", "d-lg-none","mb-5");
  cancionesCategoria.forEach((cancion) => {
    const tarjetaCancion = crearTarjetaCancion(cancion);
    carruselMobile.appendChild(tarjetaCancion);
  });
  seccion.appendChild(carruselMobile);

  const article = document.createElement("article");
  article.classList.add("d-flex", "flex-wrap", "gap-2", "d-none", "d-lg-flex", "contenedorCanciones", "mb-5");
  cancionesCategoria.forEach((cancion) => {
    const tarjetaCancion = crearTarjetaCancion(cancion);
    article.appendChild(tarjetaCancion);
  });
  seccion.appendChild(article);

  contenedorCatalogo.appendChild(seccion);
});

document.addEventListener("DOMContentLoaded", () => {
  const formularioBusqueda = document.getElementById("formPrincipal");
  const filtroInput = document.getElementById("inputBusqueda");

  formularioBusqueda.addEventListener("keyup", (e) => {
    e.preventDefault();
    const filtro = filtroInput.value.toUpperCase();

    if (filtro === "") {
      const seccionAnterior = document.getElementById("seccionBusqueda");
      if (seccionAnterior) {
        seccionAnterior.remove();
      }
      seccion.classList.toggle("d-none");
      contenedorCatalogo.appendChild(seccion);
      return;
    }

    const seccionAnterior = document.getElementById("seccionBusqueda");
    if (seccionAnterior) {
      seccionAnterior.remove();
    }

    const seccionBusqueda = document.createElement("section");
    seccionBusqueda.id = "seccionBusqueda";
    seccionBusqueda.classList.add("d-flex", "flex-wrap", "gap-2", "contenedorCanciones","pt-5");

    canciones.forEach((cancion) => {
      const titulo = cancion.titulo.toUpperCase();
      const artista = cancion.artista.toUpperCase();
      if (titulo.startsWith(filtro) || artista.startsWith(filtro)) {
        const tarjeta = crearTarjetaCancion(cancion);
        seccionBusqueda.appendChild(tarjeta);
      }
    });
   
    if(seccionBusqueda.childElementCount === 0){
      const p = document.createElement("p")
      p.classList.add("ms-2")
      p.textContent = "No se encontraron resultados";
      seccionBusqueda.appendChild(p)
      contenedorCatalogo.appendChild(seccionBusqueda)
    }else{
      contenedorCatalogo.appendChild(seccionBusqueda);
    }

    seccion.classList.add("d-none");
    
  });
});