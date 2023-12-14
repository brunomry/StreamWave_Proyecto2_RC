export class Cancion {
  #id;
  #categoria;
  #titulo;
  #artista;
  #anio;
  #duracion;
  #imagen;
  #cancion;

  constructor(id, categoria, titulo, artista, anio, duracion, imagen, cancion){
    this.#id = id;
    this.#categoria = categoria;
    this.#titulo = titulo;
    this.#artista = artista;
    this.#anio = anio;
    this.#duracion = duracion;
    this.#imagen = imagen;
    this.#cancion = cancion;
  }

  get getId(){
    return this.#id;
  }

  set setCategoria (categoria){
    this.#categoria = categoria;
  }

  get getCategoria(){
    return this.#categoria;
  }

  set setTitulo (titulo){
    this.#titulo = titulo;
  }

  get getTitulo(){
    return this.#titulo;
  }

  set setArtista (artista){
    this.#artista = artista;
  }

  get getArtista(){
    return this.#artista;
  }

  set setAnio(anio){
    this.#anio = anio;
  }

  get getAnio(){
    return this.#anio;
  }

  set setDuracion (duracion){
    this.#duracion = duracion;
  }

  get getDuracion(){
    return this.#duracion;
  }

  set setImagen(imagen){
    this.#imagen = imagen;
  }

  get getImagen(){
    return this.#imagen;
  }

  set setCancion (cancion){
    this.#categoria = cancion;
  }

  get getCancion(){
    return this.#cancion;
  }
  toJSON(){
    return {
      id: this.getId,
      categoria: this.getCategoria,
      titulo: this.getTitulo,
      artista: this.getArtista,
      anio: this.getAnio,
      duracion: this.getDuracion,
      imagen: this.getImagen,
      cancion: this.getCancion
    }
  }
}