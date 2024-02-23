/*
8 ways to get undefine...
1. variable that is not initialized will give undefined..
2. function with no return..
3. parameter that is not passed will be undefined..
4. if return has nothing on the right side will return undefined..
5. Property that doesn't exists on an object will give you undefined..
6. Accessing array elements outside of the index range..
7. deleting an element inside an array..
8. Set a value directly to undefined..


*/
// 1*
let first;
console.log(first);
// undefined

// 2*
function second(a, b){
    const total = a+b;
}

const result = second();
console.log(result);
// undefined

// 3*
function third(a,b,c,d){
    console.log(a,b,c,d);
}
third(5,8);
// 5 8 undefined undefined

// 4*

function noNegative(a,b){
    if(a < 0 || b < 0){
        return
    }
    return a+b;
}

const noNegativeResult = noNegative(-1,5);
console.log(noNegativeResult);
// undefined

// 5*
const fifth = {id : 2,name: 'ponchom',age : 22};
console.log(fifth.salary);
// undefined

// 6*
const sixth = [2,5,10,11,15];
console.log(sixth[1],sixth[5],sixth[200]);
// 5 undefined undefined

// 7*

delete sixth[2];
console.log(sixth[1],sixth[2],sixth[3]);
// 5 undefined 11
console.log(sixth);
// [ 2, 5, <1 empty item>, 11, 15 ]

// 8*
const eight = undefined;
console.log(eight);
// undefined


console.log(typeof undefined);
// undefined
console.log(typeof null);
// object


