export function printMultiplication(num1:number, num2:number) {
    let resultado:number;
    resultado = num1 * num2;
    console.log('El resultado de la multiplicacion es:', resultado);
    return resultado;
}

export function printMultiplicationRedux(num1:number, num2:number) {

    if (num1 <= 0 || num2 <= 0) {
        throw new Error('Los numeros deben ser positivos y mayor a 0');
    } else {
        for (let i = 0; i <= 10; i++) {
            console.log(num1 +'x'+ i +'='+ num1 * i);
        }
    }

}