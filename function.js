// fuction declarartion....
// function_keyword function_name(parametar){
//     Statement...
// }

function fanOff(){
    console.log("chair teke ute fan r kache jao");
    console.log("switch turn off");
}

// function call...
fanOff();

function add(num1,num2){
    const add = num1 + num2;
    console.log("Jog kore paisi : ",add);
}

add(3,2);

// return kore...

function borgo (num1){
    const square = num1 * num1;
    return square;
}

let value = borgo(12);
console.log("borgo function teke paisi : ",value);
console.log("____________________________");
value = borgo(121);
console.log("borgo function teke paisi : ",value);
