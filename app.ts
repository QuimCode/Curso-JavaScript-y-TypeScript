import { printMultiplication } from "./helpers/print-multiplication-table";


let baseOfMultiplication: number = 10;
let limitOfmultiplication: number = 20;

for(let i=0; i <= limitOfmultiplication; i++ ) {
    printMultiplication(i, baseOfMultiplication)
}