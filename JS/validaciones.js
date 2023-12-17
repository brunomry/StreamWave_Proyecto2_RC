const regEx = {
    //titulo: expresionregular
    //propiedad de cancion: expresion regular
    //artista: expresionregular
    //anio:expresionregular
    //duracion:expresionregular
    //categoria:expresionregular
    //urlImg:expresionregular
    //urlCancion:expresionregular
    //email:expresionregular
    //contraseña:expresionregular
  }
  
  export const validarTitulo = texto => regEx.titulo.test(texto)
    
  export const validarArtista = texto => regEx.artista.test(texto)

  export const validarAnio = texto => regEx.anio.test(texto)

  export const validarDuracion = texto => regEx.duracion.test(texto)

  export const validarCategoria = texto => regEx.categoria.test(texto)

  export const validarUrlImagen = texto => regEx.UrlImagen.test(texto)

  export const validarUrlCancion = texto => regEx.UrlCancion.test(texto)