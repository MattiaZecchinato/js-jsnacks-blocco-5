const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

names.forEach(element => {

    console.log(element);
});

// BONUS
console.log('---');

for (let i = 0; i < names.length; i++) {

    const element = names[i];
    console.log(element);
}