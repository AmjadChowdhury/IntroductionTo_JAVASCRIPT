// function declaration...
function add(a,b){
    return a+b;
}
console.log(add(5,6));

// function expression...
const add1 = function(a,b){
    return a+b;
}
console.log(add1(10,20));

// arrow function...
const add2 = (a,b) => (a+b);
console.log(add2(20,30));

const name = () => 'Amjad vat khai';
console.log(name());

//More Arrow function...
const getAge = (person) => person.age;
const student = {name: 'Amjad',age: 21};
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const array = [1,2,3,4,5];
const thirdNum = getThird(array);
console.log(thirdNum);

const doubleIt = num => num*2;
console.log(doubleIt(15));

// no parameter..
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function...
const sumMul = (x,y,z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum * mul;
    return result;
}
const p = sumMul(2,3,4);
console.log(p);