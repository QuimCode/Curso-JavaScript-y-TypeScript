for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let frutas: string[] = ["manzana", "banana", "pera", "naranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}


let numero: number = 5;
let factorial: number = 1;
let contador: number = numero;

while (contador > 0) {
    factorial *= contador;
    contador--;
}
console.log(`El factorial de ${numero} es: ${factorial}`);
