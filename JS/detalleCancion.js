import db from "../JS/db.js";
import { Cancion } from "./claseCancion.js";

const id = window.location.search;
const array = Array.from(id);
const idCancion = array.splice(4, array.length).join("");