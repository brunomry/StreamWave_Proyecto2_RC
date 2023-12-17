export const regEx = {
    titulo: '^[a-zA-Z0-9\sáéíóúÁÉÍÓÚüÜñÑ,.!?¿¡()\'-]{1,40}$',
    artista: '^[a-zA-Z0-9\sáéíóúÁÉÍÓÚüÜñÑ,.!?¿¡()\'-]{1,40}$',
    anio: '^\d{4}$',
    duracion: '^([0-5][0-9]):([0-5][0-9])$',
    categoria: '.+',
    urlImg: '^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$',
    urlCancion: '^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$',
    email: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$',
    contrasenia: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$',
  };
  
  export const validarTitulo = texto => regEx.titulo.test(texto)
    
  export const validarArtista = texto => regEx.artista.test(texto)

  export const validarAnio = texto => regEx.anio.test(texto)

  export const validarDuracion = texto => regEx.duracion.test(texto)

  export const validarCategoria = texto => regEx.categoria.test(texto)

  export const validarUrlImagen = texto => regEx.urlImg.test(texto)

  export const validarUrlCancion = texto => regEx.urlCancion.test(texto)