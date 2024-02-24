function sum(a,b,c){
    console.log(arguments);
    // [Arguments] { '0': 10, '1': 17, '2': 20, '3': 8, '4': 9, '5': 25 }
    // array like object
    let args = [...arguments]
    console.log(args);
    // [ 10, 17, 20, 8, 9, 25 ]
}

sum(10,17,20,8,9,25);
console.log(sum);
console.log(sum.length);
// [Function: sum]
// 3
// sum.length r maddome sumr parameter ber kora jay...