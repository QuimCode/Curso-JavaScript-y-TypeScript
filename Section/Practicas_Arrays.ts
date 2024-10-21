let flowers:string[] = ["Rosa","Liryio","Menta"];
let oneFlower = flowers[0];

let employers:string[] = ["Fernando","Luis","Quimey"];
let salariesPeople: number[] = [1500, 2900, 8500]
let ahourEmployers:string[] = ["8:AM - 5:PM","10:AM - 7:PM", "8:PM - 5:AM"];

// for (let x = 0; x <= 2; x++) {
//     console.log( flowers[x] );
// }

// for (let y = 0; y <= 5; y++) {
//     console.log(people[y]);
// }

for (let contador:number = 0; contador <= 2; contador++ ) {
    console.log("El empleado " + employers[contador] + " Gana un sueldo neto de: " + salariesPeople[contador] + " Pesos, trabajando la franja horaria de: " + ahourEmployers[contador]);
}