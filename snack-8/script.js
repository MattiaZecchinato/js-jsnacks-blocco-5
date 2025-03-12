const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

const findClass = students.find(student => {

  return student.name === 'Marco Lanci';
});

console.log(findClass.class);

// BONUS
console.log('---');

let findClassBonus;

for (let i = 0; i < students.length; i++) {

  const element = students[i];
  
  if (element.name === 'Marco Lanci') {

    findClassBonus = element.class;
    break;
  }
}

console.log(findClassBonus);