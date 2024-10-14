let numberOfLines = 1;

function increaseLineNumber() {
    numberOfLines += 3;
}

console.log('Linea #', numberOfLines);

increaseLineNumber();
console.log('Linea #', numberOfLines);

increaseLineNumber();
console.log('Linea #', numberOfLines);

console.log('========================');

//=====================================//

let countOfNumber = 0;

function printIncreaseCount() {
    countOfNumber++;
    console.log('Linea #', countOfNumber);
}

printIncreaseCount();
printIncreaseCount();
printIncreaseCount();
printIncreaseCount();