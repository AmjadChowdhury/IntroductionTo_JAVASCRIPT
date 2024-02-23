const person = {
    name : 'Amjad',
    age : 21,
    dept: 'IIT'
}

// if right side is an object,left side must be object..
// property as value
const {name,age : boyos,dept} = person;
console.log(name,boyos,dept);
// Amjad 21 IIT

const numbers = [10,14,9,8];
const [prothom,second] = numbers;
console.log(prothom,second);
// 10 14

function doubleIt(num1,num2){
    return [num1*2, num2*2];
}

const [firstNum,secondNum] = doubleIt(6,9);
console.log(firstNum,secondNum);
// 12 18

