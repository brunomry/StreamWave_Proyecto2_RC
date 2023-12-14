import {Cancion} from './CLASES/claseCancion.js'

const db = {
  usuarios: [],
  canciones: [
    new Cancion(
      crypto.randomUUID(),
      "Lo más escuchado",
      "Blinding Lights",
      "The Weekend",
      "2020",
      "03:23",
      "https://lh3.googleusercontent.com/R_cjQK3wwLPEzri1jerx-79zgzGocoKvwGU3NMONaTsaMM0Idd641pfB8r5jgfpn6I8JAoFtf9RBIcI",
      "https://www.youtube.com/watch?v=fHI8X4OXluQ"
    ),
    new Cancion(
      crypto.randomUUID(),
      "Lo más escuchado",
      "Me siento mucho mejor",
      "Charly García",
      "1983",
      "03:06",
      "https://c.saavncdn.com/543/Sweet-Little-Band-Play-Babies-Go-Charly-Garcia-Spanish-2012-500x500.jpg",
      "https://www.youtube.com/watch?v=O9UNtY89fvY"
    ),
    new Cancion(
      crypto.randomUUID(),
      "Lo más escuchado",
      "Save your tears",
      "The Weekend",
      "2020",
      "04:08",
      "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
      "https://www.youtube.com/watch?v=XXYlFuWEuKI&list=RD1xcSDYy3Dl4&index=2"
    ),
    new Cancion(
      crypto.randomUUID(),
      "Lo más escuchado",
      "As it was",
      "Harry Styles",
      "2022",
      "02:45",
      "https://lh3.googleusercontent.com/F618Qwn2yRlYhCqlMtEMnFHajg4rGZSGeWOF4ro7l3I9R6y7aGfowqqiNQqj6CgVR0yepTK6T5aRSfAF",
      "https://www.youtube.com/watch?v=H5v3kku4y6Q"
    )],
  categoria: ["Nuevos Lanzamientos", "Lo más escuchado","Clásicos inolvidables","Rock Nacional"]
}

export default db;