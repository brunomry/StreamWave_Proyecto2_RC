import {Cancion} from './CLASES/claseCancion.js';
import { Usuario} from './CLASES/claseUsuario.js';

const db = {
  usuarios: [
    new Usuario(
      "Administrador Supremo",
      "mail@outlook.com",
      "12345678",
      "administrador"
    ),
    new Usuario(
      "Un ser mortal",
      "usuario@mail.com",
      "87654321",
      "usuario"
    )
  ],
  canciones: [
    new Cancion(
      "7345064a-1b8f-4125-a52c-a87340a63280",
      "Nuevos Lanzamientos",
      "GTA.mp3",
      "Emilia",
      "2023",
      "02:00",
      "https://lh3.googleusercontent.com/uJKHESh8VPqACp6r-Hde7aGGGslaJLN9nsQ-fk22VlPZBvOTjGIfaDUhaObdWFzqZtLwBM10OYW-rpPb",
      "https://www.youtube.com/embed/k-RoPmzJ0sw?si=jOoBFiJ77Ir-fHxa"
  ),
  new Cancion(
      "dce93a7b-2877-4bef-bcd5-9e16adcad91f",
      "Nuevos Lanzamientos",
      "Salir con vida",
      "Morat",
      "2023",
      "02:45",
      "https://lh3.googleusercontent.com/bfsA6Og94QDTP9y7R3NZJQIHvfDxq5EB40IB2_L8bO6SZY891friw5xLg2dat-KJErAIP3t31g-MUVI",
      "https://www.youtube.com/embed/HGcABHAFvRA?si=4-MZgfVzOhCQwz0w"
  ),
  new Cancion(
      "1b740332-98ed-4ad0-bf80-1282d2f99b1e",
      "Nuevos Lanzamientos",
      "NO voy a llorar",
      "Nicki Nicole",
      "2023",
      "02:40",
      "https://lh3.googleusercontent.com/M1kCM2Bz29JcqgCRzNlQe7QHmS23dLP9kuR9W3Ue9U21dxlOt41vpgfVA3Ja98dWDJu--wCMev6AOWbhHw",
      "https://www.youtube.com/embed/I-PbBrFddr0?si=jbaeVer1mhfWYq_s"
  ),
  new Cancion(
      "dd00c31d-7c27-4f97-b923-2221bef122e0",
      "Nuevos Lanzamientos",
      "Carencias de cordura",
      "Milo J",
      "2023",
      "03:09",
      "https://lh3.googleusercontent.com/vTy5QIFJakWSBy_TsEjVv6Z2216UcWJA6q4yOAnLrdc6fWmS4rhcovbqjSa_K5EiY8dd-YAlxnOtZgw3",
      "https://www.youtube.com/embed/-zxlKAR5e2w?si=SrhGr3qe2hWCBoUr?"
  ),  
  new Cancion(
      "dfe392ee-e814-4ab6-81ad-17f737e05ede",
      "Nuevos Lanzamientos",
      "Provenza",
      "Karol G",
      "2023",
      "02:41",
      "https://lh3.googleusercontent.com/pgekGa1pMHRwSGGCtfhrGyw2KGIhHx-SS5cEjQa5hm53ifUGWEJ4Af2yqzM5OIlmie3YjOslempXBeOp",
      "https://www.youtube.com/embed/VBcs8DZxBGc?si=G0s3G_NPIF2yBtLw?"
  ),
  new Cancion(
      "806f8ec4-b80e-4382-a513-9878ecd26468",
      "Nuevos Lanzamientos",
      "Ojitos lindos",
      "Bad Bunny",
      "2023",
      "07:19",
      "https://lh3.googleusercontent.com/wLNbSrba-Qu4IFD4zLkjmxn2IqtDN1tQEWSh_QgrlBTy1GhDLai3JGjEmQ9K-6sWttkzQFBrmO2Mj4_1iw",
      "https://www.youtube.com/embed/_PJvpq8uOZM?si=BDj95ccXIL46oOrt"
  ),
    new Cancion(
      "ca1631d9-11d2-43b3-a956-09d5039f3d29",
      "Lo más escuchado",
      "Blinding Lights",
      "The Weekend",
      "2020",
      "03:23",
      "https://lh3.googleusercontent.com/R_cjQK3wwLPEzri1jerx-79zgzGocoKvwGU3NMONaTsaMM0Idd641pfB8r5jgfpn6I8JAoFtf9RBIcI",
      "https://www.youtube.com/embed/fHI8X4OXluQ?si=kOMCP8DSvn7Vchc1"
    ),
    new Cancion(
      "d117287f-7a02-470d-bb49-3ccd0b24d655",
      "Lo más escuchado",
      "Me siento mucho mejor",
      "Charly García",
      "1983",
      "03:06",
      "https://c.saavncdn.com/543/Sweet-Little-Band-Play-Babies-Go-Charly-Garcia-Spanish-2012-500x500.jpg",
      "https://www.youtube.com/embed/O9UNtY89fvY?si=o1GAeTpil69SxwnF"
    ),
    new Cancion(
      "eed0987c-1050-4745-ab39-3f46c13d1ced",
      "Lo más escuchado",
      "Save your tears",
      "The Weekend",
      "2020",
      "04:08",
      "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
      "https://www.youtube.com/embed/XXYlFuWEuKI?si=il__IXgbEJQCUii6"
    ),
    new Cancion(
      "e16a1153-daf6-4619-8f76-652e571fffdc",
      "Lo más escuchado",
      "As it was",
      "Harry Styles",
      "2022",
      "02:45",
      "https://lh3.googleusercontent.com/F618Qwn2yRlYhCqlMtEMnFHajg4rGZSGeWOF4ro7l3I9R6y7aGfowqqiNQqj6CgVR0yepTK6T5aRSfAF",
      "https://www.youtube.com/embed/H5v3kku4y6Q?si=zR7j0A4jDzN7AOyM"
    ),
    new Cancion(
      "a35c6ff6-0af6-4462-b2ec-ed7c33031f0e",
      "Lo más escuchado",
      "Peaches",
      "Justin Bieber",
      "2021",
      "03:17",
      "https://lh3.googleusercontent.com/lDDamgMBjF1o8ocsdDwoRPo-zuSaHNI3aGeyMpJO_AjNE6HAPZFyJ39wh-A2ySnx2XyPECOQb1HLKn3G",
      "https://www.youtube.com/embed/tQ0yjYUFKAE?si=-GjALHgajse6ZTb1"
    ),
    new Cancion(
      "574bf8e0-4260-4fa2-a35d-0d955b2850da",
      "Lo más escuchado",
      "Dance Monkey",
      "Tones and I",
      "2019",
      "03:56",
      "https://lh3.googleusercontent.com/hDSzLR6UDLcfxL6Hl9k5kJ6KmDTOavpr-GSCPyKgZTlPZuFcbNFTBI8O9HJR_i-Ts_bGg6bn9-3AGSu1",
      "https://www.youtube.com/embed/q0hyYWKXF0Q?si=8gf1E0WRlj6phvx8"
    ),
    new Cancion(
      "e6dbe1a7-085a-462c-916b-663f35f397e6",
      "Clásicos inolvidables",
      "You Give Love A Bad Name",
      "Bon Jovi",
      "1986",
      "03:50",
      "https://lh3.googleusercontent.com/SqcnRq7G6BLl1gYS34sMMx-ilwFSDpSO8oG0FTBabMsNyfSNSdw1P2djS_FqC93Nlruj3RoLO-6u9zOJ",
      "https://www.youtube.com/embed/KrZHPOeOxQQ?si=YmGvj-bSX03C-1Vp"
    ),
    new Cancion(
      "15ca04ff-7237-46fc-a1ea-0a5afc5bc9dc",
      "Clásicos inolvidables",
      "Livin' On A Prayer",
      "Bon Jovi",
      "1986",
      "04:08",
      "https://lh3.googleusercontent.com/SqcnRq7G6BLl1gYS34sMMx-ilwFSDpSO8oG0FTBabMsNyfSNSdw1P2djS_FqC93Nlruj3RoLO-6u9zOJ",
      "https://www.youtube.com/watch?v=lDK9QqIzhwk"
    ),
    new Cancion(
      "91a7303c-6921-46e5-8243-2ea4ed0fdd50",
      "Clásicos inolvidables",
      "Take on me",
      "A-ha",
      "1984",
      "04:03",
      "https://lh3.googleusercontent.com/8YZqnYRc52GUz0iyQTRZvzh8RSbCNTTC0NSrpRlKf8UfSyu87K7ziegM8aFfAyMgUXBisxT_weHb4pFE",
      "https://www.youtube.com/embed/lDK9QqIzhwk?si=WwG1HIMOr98KyJ7D"
    ),
    new Cancion(
      "1096c77e-2cfe-4a50-b713-4ab060d91b7b",
      "Clásicos inolvidables",
      "Sweet Dreams",
      "Eurythmics",
      "1983",
      "03:34",
      "https://lh3.googleusercontent.com/6OEV1ScmH99GPkUTHNbjDkdsuQOJGciJwyXbvOR7Nhi3aAyBNfX4G196wOp_k-bkBskfZiRk-JLoQJj9TA",
      "https://www.youtube.com/embed/qeMFqkcPYcg?si=mLhjZLHuiMddzuhE"
    ),
    new Cancion(
      "1f29648b-961e-4f44-a08c-5b9a0482c7fc",
      "Clásicos inolvidables",
      "Beat it",
      "Michael Jackson",
      "1983",
      "04:58",
      "https://lh3.googleusercontent.com/URvHCfI2iyGAlAwqqBFeaFhU9DeKk_iuX40OIIIj8Zp0wIT3BVsJ2JRMwLLbUB9EZS7t7oDlMrI2S3OvGA",
      "https://www.youtube.com/embed/oRdxUFDoQe0?si=HicGI2R7fRfg79oN",
    ),
    new Cancion(
      "d11c4358-361b-43c0-aded-9f367b62485a",
      "Clásicos inolvidables",
      "Self Control",
      "Laura Branigan",
      "1983",
      "04:58",
      "https://lh3.googleusercontent.com/97oA6pOe0ROO08afj2Ci_kjb2z-bQ-V5GDK3FPryIRbVLBoKXHJTBMWUClaU6Vm4KcWPLkO8JisLvymrWg",
      "https://www.youtube.com/embed/RP0_8J7uxhs?si=UCr9lWcnl9tLklGc"
      ),
      new Cancion(
        "882e6170-699f-40a2-92b0-4314bc8bdf38",
        "Clásicos inolvidables",
        "Everybody's Changing",
        "Keane",
        "2004",
        "04:58",
        "https://lh3.googleusercontent.com/B_qKJyBgZhk1x7Y2X_JIEcqM9ym80Jri0QlB7nxefV9iv2EkYMlP1lP8C2Lpb785xV5GxWz95aQwluq1Rg",
        "https://www.youtube.com/embed/RSNmgE6L8AU?si=f9EkwoqjbyOCFSmK"
      ),
      new Cancion(
        "f63b6f9e-43a2-42bc-b1dc-4994c302b41a",
        "Rock Nacional",
        "Arde la ciudad",
        "Mancha de rolando",
        "1995",
        "04:09",
        "https://lh3.googleusercontent.com/UmsdcUfssP70-M9fmX6RN6eOx7fa77w7rfus4aZfNHuVKNMtGJhXtmWmk-7U9751mqIo4XZ7SMZ-k4Mv",
        "https://www.youtube.com/embed/-8vxXsfbxj4?si=keBHzjI2Ozx3kRDz"
      ),
      new Cancion(
        "45e36913-b8f2-4c1d-92af-4c7fe2bc20bf",
        "Rock Nacional",
        "Mi gin tonic",
        "Andrés Calamaro",
        "2010",
        "02:56",
        "https://lh3.googleusercontent.com/wzscBeVmVLvwY_fKHmjPUfIPadCW7SNb6fjGHwVV0SDt674IrGXjlDeuXBTJRG0qa293en1tOukGCzHg",
        "https://www.youtube.com/embed/BP1Ksv35oek?si=aouIiE7x4qe_SKvQ"
      ),
      new Cancion(
        "9cb74080-c34a-4d5f-9df4-cd757aa673e1",
        "Rock Nacional",
        "Mil horas",
        "Los abuelos de la nada",
        "1983",
        "02:45",
        "https://lh3.googleusercontent.com/OgJSkoR1V9ItJmNTn1Ij6d-fnEok_e6AV1I4FAbnBr3vXrBn9yHq_LaEvgBDA_ktssgE8Orm0It5-XNq",
        "https://www.youtube.com/embed/U5yU2KPw1WY?si=erVE0DQs4BRsYI-Z"
      ),
      new Cancion(
        "ae27901c-c988-4d72-b59b-2a7c0ca14474",
        "Rock Nacional",
        "Trenes, camiones y tractores",
        "Árbol",
        "1997",
        "03:36",
        "https://lh3.googleusercontent.com/kULK6gwdrUtv9VFu55G9jUuOU0cr2xJRsK-3c-u4qRa-aHQk_1N1i4totddBdu_nUbryJPoUbpx_JRug",
        "https://www.youtube.com/embed/uYU9w-5oNXM?si=s1ct61CovKLmgTLu"
      ),
      new Cancion(
        "b86ac001-2587-485b-9a86-19494b1ef0b3",
        "Rock Nacional",
        "Pasos al costado",
        "Turf",
        "2003",
        "04:38",
        "https://lh3.googleusercontent.com/PqlavfJR_XmzXSSd4HEqhgp7mc8PKdFMUHvmmEv1MHPxwvClywMP5HBwbetUYGsgmtifrBWFLy4LW4w",
        "https://www.youtube.com/embed/TJkmo1PzfJg?si=cBIMiH-MYP2BdHZS"
      ),
      new Cancion(
        "dbf6b8f9-e64a-41a0-9345-6a7def468032",
        "Rock Nacional",
        "Nada fue un error",
        "Coti",
        "2005",
        "03:48",
        "https://lh3.googleusercontent.com/lMwMBD7MglhWleBZBVb5Hka5JJQ1FiB8JGAkWRwMvXOQdahNB7lYY5E5xulZkdJdYyz5eJTJwcdWtFf4jw",
        "https://www.youtube.com/embed/pvsGPPi_h7w?si=X4trLKMKqRxvrCly"
      )
  ],
  categorias: ["Nuevos Lanzamientos", "Lo más escuchado","Clásicos inolvidables","Rock Nacional"]
}

export default db;