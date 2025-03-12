const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

people.forEach(element => {

  console.log(element.name);
});

// BONUS
console.log('---');

for (let i = 0; i < people.length; i++) {

  const element = people[i];
  console.log(element.name);
}