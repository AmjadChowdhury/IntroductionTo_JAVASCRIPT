function add(num1 = 0,num2 = 0){
    const sum = num1 + num2;
    console.log(num1,num2,sum);
}

add(); // 0 0 0
add(5); // 5 0 5
add(5,10); // 5 10 15

// Empty string pass by default...
function fullName(firstName , lastName = ''){
    const name = firstName + ' ' + lastName;
    console.log(name);
}
fullName('Amjad'); // Amjad
fullName('Amjad','Chy'); // Amjad Chy

// Empty array pass by Dfault....
function numbers(num = []){
    console.log(num);
}
numbers(); // []
numbers(num = [2,3,5]); // [ 2, 3, 5 ]


// Empty object pass by default....
function person(personDetails = {}){
    console.log(personDetails);
}
person(); // {}
person(about = {name: 'Amjad',age: 21}); // { name: 'Amjad', age: 21 }