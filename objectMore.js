let student = {
    name : 'Amjadul Alam Chowdhury',
    dept : 'IIT',
    age : 21,
    course: ['AAD','ADC','DATABASE','Accounting'],
    car : {
        brand: 'BMW',
        price: 2100000000,
        manufacture:{
            CEO : 'Elon Musk',
            engine: 'tesla'
        }
    }
    // hobbie : function(){
    //     console.log('My favourite hobby is playing');
    // }
    // amr function kaj kore na...
}

// student.hobbie();
console.log(student.car.brand); // BMW
console.log(student.car.manufacture.engine);  // tesla
console.log(student['course']); // [ 'AAD', 'ADC', 'DATABASE', 'Accounting' ]


let product = [
    {phone : 'Xiome', price : 21000},
    {phone : 'Realme', price : 22000}
]

console.log(product[0]); // { phone: 'Xiome', price: 21000 }
console.log(product[1]); // { phone: 'Realme', price: 22000 }

product = {
    '1' : {phone : 'Xiome', price : 21000},
    '2' : {phone : 'Realme', price : 21000},
    '3' : {phone : 'Iphone', price : 21000},
}

console.log(product['1']); // { phone: 'Xiome', price: 21000 }