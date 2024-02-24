// primitive data type a pass by value hoy..
// function r vaire variable tar global man rakbe..

function passByValue(num1,num2){
    num1 = 10;
    console.log(num1,num2);

}
let a = 5;
let b = 10;
console.log(a,b);
// 5 10
passByValue(a,b);
// 10 10
console.log(a,b);
// 5 10

// non primitive a value pass by reference hoy..
function passByRef(couple1,couple2){
    couple1.name = 'Asol nam jani na';
    couple2.partner = 'Muri khao'
}

const person1 = {name: 'Rahat', partner: 'Israt'}
const person2 = {name: 'Pavel', partner: 'Pagol bedi'}
console.log(person1,person2);
// { name: 'Rahat', partner: 'Israt' } { name: 'Pavel', partner: 'Pagol bedi' }
passByRef(person1,person2);
console.log(person1,person2);
// { name: 'Asol nam jani na', partner: 'Israt' } { name: 'Pavel', partner: 'Muri khao' }