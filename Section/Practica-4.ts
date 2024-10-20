// Funciones, Reutilizacion de codigo, Importaciones y Arreglos/Listas

function greet ( name:string, year:number) {
    console.log('Hola estudiante de progrmaacion, su nombre y edad son:' + name, year);
}

greet('Quimey', 25);


// function addTwoNumbers( num1: number, num2: number):number {
//     return num1 + num2;
// }

import { addTwoNumbers, divideTwoNumbers, multiplyTwoNumbers, subtractTwoNumbers } from "../helpers/math-helpers";

let total1:number = addTwoNumbers(10, 20)
let total2:number = divideTwoNumbers(10, 20)
let total3:number = multiplyTwoNumbers(10, 20)
let total4:number = subtractTwoNumbers(10, 20)

console.log('El resultado de la suma es:', total1);
console.log('El resultado de la resta es:', total2);
console.log('El resultado de la multiplicacion es:', total3);
console.log('El resultado de la division es:', total4);

let total:number = total1 + total2 + total3 + total4;
console.log('El resultado de las operacion sumadas son un total de: ', total);

import { printMultiplication } from "../helpers/print-multiplication-table";

let baseOfMultiplication: number = 5;
let limitOfmultiplication: number = 10;

for(let i=0; i <= limitOfmultiplication; i++ ) {
    printMultiplication(i, baseOfMultiplication)
}

import { printMultiplicationRedux } from "../helpers/print-multiplication-table";

printMultiplicationRedux(5)