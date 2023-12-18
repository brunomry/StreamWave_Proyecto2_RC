const titulo = /^.{1,40}$/;
const artista = /^.{1,40}$/;
const anio = /^(18[6-9]|19[0-9]{2}|20[0-1][0-9]|202[0-3])$/;
const duracion = /^([0-5][0-9]):([0-5][0-9])$/;
const categoria = /.+/;
const urlImg = /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\S*)?$/;
const urlCancion = /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\S*)?$/;
const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const contrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const validarTitulo = texto => titulo.test(texto);
export const validarArtista = texto => artista.test(texto);
export const validarAnio = texto => anio.test(texto);
export const validarDuracion = texto => duracion.test(texto);
export const validarCategoria = texto => {
  if (texto !== "") return true;
  return false;
};
export const validarUrlImagen = texto => urlImg.test(texto);
export const validarUrlCancion = texto => urlCancion.test(texto);
export const validarEmail = texto => email.test(texto);
export const validarContrasenia = texto => contrasenia.test(texto);