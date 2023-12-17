import db from "../JS/db.js";
import { Cancion } from "./claseCancion.js";

const canciones = JSON.parse(localStorage.getItem("cancionesKey")) || [];

 const cargarDB = () => {
   localStorage.setItem("cancionesKey", JSON.stringify(db.canciones));
   localStorage.setItem("categorias", JSON.stringify(db.categorias));
   localStorage.setItem("usuarios", JSON.stringify(db.usuarios));
   location.reload()
 };