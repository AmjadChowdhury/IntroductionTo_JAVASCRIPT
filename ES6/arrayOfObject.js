const laptop = [
    {name : 'Mac',price: 150000},
    {name : 'Lenovo',price: 50000},
    {name : 'Hp',price: 60000}
]

const mapResult = laptop.map(num => num.price)
console.log(mapResult);
// [ 150000, 50000, 60000 ]

laptop.forEach(id => console.log(id.name));
// Mac
// Lenovo
// Hp

const filterResult = laptop.filter(num => num.price > 50000)
console.log(filterResult)
// [ { name: 'Mac', price: 150000 }, { name: 'Hp', price: 60000 } ]

const findResult = laptop.find(num => num.name.length>=2)
console.log(findResult)
// { name: 'Mac', price: 150000 }

const reduceSumResult = laptop.reduce((prev,current) => prev + current.price,0)
console.log(reduceSumResult);
// 260000