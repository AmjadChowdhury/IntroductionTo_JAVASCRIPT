function name(first,last){
    if(typeof first !== 'string' || typeof last !== 'string'){
        return 'Please give string type data.';
    }
    let full = first + ' ' +  last;
    return full;
}


let fullName = name(7,5)
console.log(fullName);
// 'Please give string type data.'


fullName = name('amjad','chy')
console.log(fullName);
// amjad chy


function arrayCheck(numbers){
    if(Array.isArray(numbers) === false){
        return 'Please give an array';
    }
    return 'This is Array,No problem';
}

let numbers = [10,5,3,2];
let p = arrayCheck(numbers);
console.log(p);
// This is Array,No problem

p = arrayCheck(10,9);
console.log(p);
// Please give an array

let students = {
    name : 'Amjad',
    age : 21
}
function std(students){
    if(typeof students !== 'object'){
        return 'pleae give an object type data';
    }
    return 'Student age is :',students.age;
}

let x = std(students);
console.log(x);
// 21

x = std(10,15);
console.log(x);
// pleae give an object type data
