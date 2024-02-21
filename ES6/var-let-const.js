// var : khub ekta use kore na...
// const : variable r man change kora jabe na...
var num = 2;
console.log(num);


const variableNum = 10;
console.log(variableNum);

let p = 10;
p = 100;
console.log(p);

const numbers = [2,4,6,8,10];
// numbers = [1,3,5,7,9];
// eta kora jabe na....
numbers.push(11,13);
numbers[3] = numbers[3]*2;
numbers.shift();
console.log(numbers);
// [ 4, 6, 16, 10, 11, 13 ]

const person = {
    name : 'Amjad',
    age : 21
}
person.name = 'Esha';
person.salary = 20;
console.log(person);
// { name: 'Esha', age: 21, salary: 20 }