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
    ),
    new Cancion(
      crypto.randomUUID(),
      "Lo más escuchado",
      "Peaches",
      "Justin Bieber",
      "2021",
      "03:17",
      "https://lh3.googleusercontent.com/lDDamgMBjF1o8ocsdDwoRPo-zuSaHNI3aGeyMpJO_AjNE6HAPZFyJ39wh-A2ySnx2XyPECOQb1HLKn3G",
      "https://www.youtube.com/watch?v=tQ0yjYUFKAE"
    ),
    new Cancion(
      crypto.randomUUID(),
      "Lo más escuchado",
      "Dance Monkey",
      "Tones and I",
      "2019",
      "03:56",
      "https://lh3.googleusercontent.com/hDSzLR6UDLcfxL6Hl9k5kJ6KmDTOavpr-GSCPyKgZTlPZuFcbNFTBI8O9HJR_i-Ts_bGg6bn9-3AGSu1",
      "https://www.youtube.com/watch?v=q0hyYWKXF0Q"
    ),
    new Cancion(
      crypto.randomUUID(),
      "Clásicos inolvidables",
      "You Give Love A Bad Name",
      "Bon Jovi",
      "1986",
      "03:50",
      "https://lh3.googleusercontent.com/SqcnRq7G6BLl1gYS34sMMx-ilwFSDpSO8oG0FTBabMsNyfSNSdw1P2djS_FqC93Nlruj3RoLO-6u9zOJ",
      "https://www.youtube.com/watch?v=KrZHPOeOxQQ"
    ),
    new Cancion(
      crypto.randomUUID(),
      "Clásicos inolvidables",
      "Livin' On A Prayer",
      "Bon Jovi",
      "1986",
      "04:08",
      "https://lh3.googleusercontent.com/SqcnRq7G6BLl1gYS34sMMx-ilwFSDpSO8oG0FTBabMsNyfSNSdw1P2djS_FqC93Nlruj3RoLO-6u9zOJ",
      "https://www.youtube.com/watch?v=lDK9QqIzhwk"
    ),
    new Cancion(
      crypto.randomUUID(),
      "Clásicos inolvidables",
      "Take on me",
      "A-ha",
      "1984",
      "04:03",
      "https://lh3.googleusercontent.com/8YZqnYRc52GUz0iyQTRZvzh8RSbCNTTC0NSrpRlKf8UfSyu87K7ziegM8aFfAyMgUXBisxT_weHb4pFE",
      "https://www.youtube.com/watch?v=djV11Xbc914"
    ),
    new Cancion(
      crypto.randomUUID(),
      "Clásicos inolvidables",
      "Sweet Dreams",
      "Eurythmics",
      "1983",
      "03:34",
      "https://lh3.googleusercontent.com/6OEV1ScmH99GPkUTHNbjDkdsuQOJGciJwyXbvOR7Nhi3aAyBNfX4G196wOp_k-bkBskfZiRk-JLoQJj9TA",
      "https://www.youtube.com/watch?v=qeMFqkcPYcg"
    ),
    new Cancion(
      crypto.randomUUID(),
      "Clásicos inolvidables",
      "Beat it",
      "Michael Jackson",
      "1983",
      "04:58",
      "https://lh3.googleusercontent.com/URvHCfI2iyGAlAwqqBFeaFhU9DeKk_iuX40OIIIj8Zp0wIT3BVsJ2JRMwLLbUB9EZS7t7oDlMrI2S3OvGA",
      "https://www.youtube.com/watch?v=oRdxUFDoQe0",
      ""
    ),
    new Cancion(
      crypto.randomUUID(),
      "Clásicos inolvidables",
      "Self Control",
      "Laura Branigan",
      "1983",
      "04:58",
      "https://lh3.googleusercontent.com/97oA6pOe0ROO08afj2Ci_kjb2z-bQ-V5GDK3FPryIRbVLBoKXHJTBMWUClaU6Vm4KcWPLkO8JisLvymrWg",
      ""
      ),
      new Cancion(
        crypto.randomUUID(),
        "Clásicos inolvidables",
        "Everybody's Changing",
        "Keane",
        "2004",
        "04:58",
        "https://lh3.googleusercontent.com/B_qKJyBgZhk1x7Y2X_JIEcqM9ym80Jri0QlB7nxefV9iv2EkYMlP1lP8C2Lpb785xV5GxWz95aQwluq1Rg",
        "https://www.youtube.com/watch?v=RSNmgE6L8AU"
      ),
      new Cancion(
        crypto.randomUUID(),
        "Rock Nacional",
        "Arde la ciudad",
        "Mancha de rolando",
        "1995",
        "04:09",
        "https://lh3.googleusercontent.com/UmsdcUfssP70-M9fmX6RN6eOx7fa77w7rfus4aZfNHuVKNMtGJhXtmWmk-7U9751mqIo4XZ7SMZ-k4Mv",
        "https://www.youtube.com/watch?v=-8vxXsfbxj4"
      ),
      new Cancion(
        crypto.randomUUID(),
        "Rock Nacional",
        "Mi gin tonic",
        "Andrés Calamaro",
        "2010",
        "02:56",
        "https://lh3.googleusercontent.com/wzscBeVmVLvwY_fKHmjPUfIPadCW7SNb6fjGHwVV0SDt674IrGXjlDeuXBTJRG0qa293en1tOukGCzHg",
        "https://www.youtube.com/watch?v=BP1Ksv35oek"
      ),
      new Cancion(
        crypto.randomUUID(),
        "Rock Nacional",
        "Mil horas",
        "Los abuelos de la nada",
        "1983",
        "02:45",
        "https://lh3.googleusercontent.com/OgJSkoR1V9ItJmNTn1Ij6d-fnEok_e6AV1I4FAbnBr3vXrBn9yHq_LaEvgBDA_ktssgE8Orm0It5-XNq",
        "https://www.youtube.com/watch?v=U5yU2KPw1WY"
      ),
      new Cancion(
        crypto.randomUUID(),
        "Rock Nacional",
        "Trenes, camiones y tractores",
        "Árbol",
        "1997",
        "03:36",
        "https://lh3.googleusercontent.com/kULK6gwdrUtv9VFu55G9jUuOU0cr2xJRsK-3c-u4qRa-aHQk_1N1i4totddBdu_nUbryJPoUbpx_JRug",
        "https://www.youtube.com/watch?v=uYU9w-5oNXM"
      ),
      new Cancion(
        crypto.randomUUID(),
        "Rock Nacional",
        "Pasos al costado",
        "Turf",
        "2003",
        "04:38",
        "https://lh3.googleusercontent.com/PqlavfJR_XmzXSSd4HEqhgp7mc8PKdFMUHvmmEv1MHPxwvClywMP5HBwbetUYGsgmtifrBWFLy4LW4w",
        "https://www.youtube.com/watch?v=TJkmo1PzfJg"
      ),
      new Cancion(
        crypto.randomUUID(),
        "Rock Nacional",
        "Nada fue un error",
        "Coti",
        "2005",
        "03:48",
        "https://lh3.googleusercontent.com/lMwMBD7MglhWleBZBVb5Hka5JJQ1FiB8JGAkWRwMvXOQdahNB7lYY5E5xulZkdJdYyz5eJTJwcdWtFf4jw",
        "https://www.youtube.com/watch?v=pvsGPPi_h7w")
  ],
  categoria: ["Nuevos Lanzamientos", "Lo más escuchado","Clásicos inolvidables","Rock Nacional"]
}

export default db;