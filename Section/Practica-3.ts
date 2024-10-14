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
