const numbers = [2,5,8,10,3];

function doubleIt(num){
    return num*2;
}

const result = numbers.map(doubleIt);
console.log(result);
// [ 4, 10, 16, 20, 6 ]

const double2 = (num) => num*2;
const result1 = numbers.map(double2);
console.log(result1);
// [ 4, 10, 16, 20, 6 ]

const result2 = numbers.map(num => num*10);
console.log(result2);
// [ 20, 50, 80, 100, 30 ]

const nameArray = ['Amjad','Rahat Khan','Sabuj Ahammed','Pavel'];
const firstLetter = nameArray.map(name => name[0]);
console.log(firstLetter);
// [ 'A', 'R', 'S', 'P' ]

const length = nameArray.map(name => name.length);
console.log(length);
// [ 5, 10, 13, 5 ]
