console.log('Inicio de Programa')

let isTired: boolean = true;

if (isTired) {
    console.log('Tomar Café')
} else {
    console.log('Toma Agua')
}

console.log('===============');

let grade:number = 90;

if (grade >= 90) {
    console.log('Promocionado')
} else {
    if (grade >= 50){
        console.log('Aprobado')
    } else {
        console.log('Resprobado')
    }
}

console.log('===============');

if(grade >= 90) {
    console.log('Promocionado')
} else if (grade >= 50) {
    console.log('Aprobado')
} else {
    console.log('Resprobado')
}

console.log('Inicio de Programa')

console.log('===============');

//================================================//

/*
Realizar un programa que muestre la nota del alumno como: A,B,C,D,F donde:
- A >= 90
- B >= 80
- C >= 70
- D >= 60
- F < 60
*/

let gradeStudent: number = 90;

if (gradeStudent >= 90) {
    console.log('La nota del alumno es : A');
} else if (gradeStudent >= 80) {
    console.log('La nota del alumno es : B');
} else if (gradeStudent >= 70) {
    console.log('La nota del alumno es : C');
} else if (gradeStudent >= 60) {
    console.log('La nota del alumno es : D');
} else {
    console.log('La nota del alumno es : F');
}

console.log('===============');
console.log('SWITCH');

let weekDay: number = -1; // 1= Lunes, 2=Martes, 3=Miercoles

if (weekDay <= 0) {
    console.log('Dia no valido')

    throw new Error('Dia de la semana no permitido')
}

switch (weekDay) {
    case 1:
        console.log('Es Lunes')
        break;
    case 2:
        console.log('Es Martes')
        break;
    case 3:
        console.log('Es Miercoles')
        break;
    default:
        console.log('Dia no valido')
}

console.log('===============');
console.log('CILOS/LOOPS');

let gasTank = 50;


while ( gasTank > 0 ) {
    console.log('El tanque de gas tiene', gasTank);
    gasTank--;
}

console.log('Tanque vacío');
console.log('===============');

do  {
    console.log('El tanque de gas tiene', gasTank);
    gasTank--;
} while ( gasTank > 0 );

console.log('Tanque vacío');
console.log('===============');

for (let i:number = 1; i <= 10; i++) {
    console.log('let i', i);
}

console.log('===============');
// Definir variables y constantes

let baseMultiplicator: number = 10;//+
let limitMultiplicator: number = 0;//+

while (limitMultiplicator != 50) {

    let resultado:number = baseMultiplicator * 1;
    console.log('10 x 1 es :', resultado);

    let resultado2:number = baseMultiplicator * 2;
    console.log('10 x 2 es :', resultado2);

    let resultado3:number = baseMultiplicator * 3;
    console.log('10 x 3 es :', resultado3);

    let resultado4:number = baseMultiplicator * 4;
    console.log('10 x 4 es :', resultado4);

    let resultado5:number = baseMultiplicator * 5;
    console.log('10 x 5 es :', resultado5);

    limitMultiplicator = resultado5;
    console.log('Se llego al maximo de operaciones, ejecute de nuevo.')

}

console.log('===============');

for (let i =1; i <= 5; i++) {
    console.log('Multiplicando ... ' + 10 + 'x' + i, 'eso es igual a =', 10*i);
    console.log('Se llego al maximo de operaciones, ejecute de nuevo.')
}

console.log('===============');
console.log('=Practicas For=');

for (let i:number=0; i <= 50;) {
    i += 5;
    console.log('Numero :', i);
}