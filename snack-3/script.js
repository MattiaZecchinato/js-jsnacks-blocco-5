const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const newNumbers = numbers.map(num => {

    return num + 1;
});

console.log(newNumbers);

// BONUS
console.log('---');

const newNumbersBonus = [];

for (let i = 0; i < numbers.length; i++) {

    const element = numbers[i] + 1;
    newNumbersBonus.push(element);
}

console.log(newNumbersBonus);