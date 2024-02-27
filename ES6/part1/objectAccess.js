const person = [{name:'Amjad',age: 21,dept: 'IIT'}];
console.log(person[0].dept);
// IIT

const product = {
    id : 1,
    product_details: {
        name : 'Lenova',
        price: 50000,
        details:{
            ssd: true,
            graphicsCard: 'ýes'
        }
    },
    user: [{name: 'Ámjad',salary : 100000},{name: 'Ershad',salary: 600000}]
}

console.log(product.product_details.name);
// Lenova
console.log(product.user[1].salary);
// 600000
console.log(product.product_details.details?.graphicsCard);
// ýes
console.log(product.product_details.biboron?.graphicsCard);
// undefined...na takle undefined hobe tao error khabe na...
