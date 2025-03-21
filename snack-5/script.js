const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNums = nums.filter(num => {

    return num % 2 === 0;
});

console.log(evenNums);

// BONUS
console.log('---');

const evenNumsBonus = [];

for (let i = 0; i < nums.length; i++) {

    const element = nums[i];

    if (element % 2 === 0) {

        evenNumsBonus.push(element);
    }
    
}

console.log(evenNumsBonus);