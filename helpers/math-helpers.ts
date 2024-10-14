export function addTwoNumbers( num1: number, num2: number):number {
    return num1 + num2;
}

export function subtractTwoNumbers(num1: number, num2: number):number {
    return num1 - num2;
}

export function multiplyTwoNumbers(num1: number, num2: number):number {
    return num1 * num2;
}

export function divideTwoNumbers(num1: number, num2: number):number {
    if (num2 === 0) {
        throw new Error('No se puede dividir por 0');
    } else {
        return num1 / num2;
    }
}