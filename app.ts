// let persona = {
//     nombre: 'Maria',
//     años: 23,
//     gustos: ["Musica", "Juegos"],
//     esLatina: true,
//     estaRegistrada: true,

//     impresionInfo() {
//         if (persona.estaRegistrada === false) {
//             console.log('Usted no esta registrada');
//             return;
//         } else {
//             let objectString = persona.nombre + ' Tiene la edad de: ' + persona.años + ' y sus gustos son la ' + persona.gustos;
//             console.log(objectString);
//         }
//     }
// }

// persona.impresionInfo();

// let auto = {
//     color: 'Blanco',
//     traccion: '4x4',
//     llantas: 4,
//     puertas: 5,
//     marca: 'Jeep',
//     tieneCombustible: true,
//     añosDeUso: 3,
//     esNuevo: false,
// }

// let smartTv = {
//     marca: 'Samsung',
//     resolucion: '4K Ultra HD',
//     pantallaTactil: false,
//     tieneBluetooth: true,
//     tieneConectividadWifi: true,
//     tieneAsistenteVirtual: false,
//     tieneSmartHome: true,
//     añosDeUso: 0,
//     esNuevo: true,
// }

// let youtubeVideo = {
//     titulo: 'El camino al éxito',
//     duracion: '2:30',
//     nroDeLikes: 10000,
//     nroDeComentarios: 500,
//     nroDeVisualizaciones: 500000,
//     esEnVivo: false,
//     esRelacionadoCon: ['Cine', 'Deportes', 'Familia'],
//     esTrending: true,
//     esPopular: false,
//     esNovedad: false,
//     esDeInteres: true,
// }

// console.log('=============');
// console.log(auto);
// console.log('=============');
// console.log(smartTv);
// console.log('=============');
// console.log(youtubeVideo);

// console.log('=============');
// ARREGLOS DE OBJETOS

interface Personas {
    nombre: string;
    apellido: string;
    edad: number;
    gustos: string[];
    esEstudiante: boolean;
}

let fernando: Personas = {
    nombre: 'Fernando',
    apellido: 'Perez',
    edad: 30,
    gustos: ['Cine', 'Deportes', 'Viajar'],
    esEstudiante: true,
}

let luis: Personas = {
    nombre: 'Luis',
    apellido: 'Gomez',
    edad: 25,
    gustos: ['Musica', 'Deportes', 'Cocinar'],
    esEstudiante: true,
}

let maria: Personas = {
    nombre: 'Maria',
    apellido: 'Garcia',
    edad: 28,
    gustos: ['Musica', 'Deportes', 'Cocinar'],
    esEstudiante: false,
}

let people: Personas[] = [fernando, maria, luis];

for (let i = 0; i <= people.length; i++ ) {
    let person = people[i];
    console.log(person.nombre + ' ' + person.apellido + ' tiene una edad de: ' + person.edad + ' años. Sus gustos son: ' + person.gustos);
}