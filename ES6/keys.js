const person = {
    name : 'Amjad',
    age : 21,
    color: 'white',
    isGood: true
}

const keys = Object.keys(person);
console.log(keys);
// [ 'name', 'age', 'color', 'isGood' ]

const values = Object.values(person);
console.log(values);
// [ 'Amjad', 21, 'white', true ]

const pair = Object.entries(person);
console.log(pair);
// Two dimentional..
// [
//   [ 'name', 'Amjad' ],
//   [ 'age', 21 ],
//   [ 'color', 'white' ],
//   [ 'isGood', true ]
// ]

// delete from object...
delete person.isGood;
console.log(person);
// { name: 'Amjad', age: 21, color: 'white' }

const {color,...bakiInfo} = person;
console.log(bakiInfo);
// { name: 'Amjad', age: 21 }

// freeze...
// freeze korle kon kisu remove o kora jabe abr add o kora jabe na....
Object.freeze(person);
person.age = 22;
console.log(person);