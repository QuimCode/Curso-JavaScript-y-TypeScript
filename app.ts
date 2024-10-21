import { isString } from "util"
import { isStringObject } from "util/types"

let auto = {
    color: 'blanco',
    traccion: '4x4',
    llantas: 4,
    puertas: 5,
    marca: 'Jeep'
}

let persona = {
    nombre: 'Maria',
    años: 23,
    gustos: ["Musica", "Juegos"],
    esLatina: true,
    estaRegistrada: true,

    impresionInfo() {
        if (persona.estaRegistrada === false) {
            console.log('Usted no esta registrada');
            return;
        } else {
            let objectString = persona.nombre + ' Tiene la edad de: ' + persona.años + ' y sus gustos son la ' + persona.gustos;
            console.log(objectString);
        }
    }
}

persona.impresionInfo();