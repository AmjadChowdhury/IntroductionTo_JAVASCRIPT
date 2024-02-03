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

// condition r upor depend kore return korbe...
function isEven(numbers){
    if(numbers % 2 === 0)
    {
        return true;
    }
    return false;
}
let isEvenKi = isEven(12);
console.log(isEvenKi);

isEvenKi = isEven(153);
console.log(isEvenKi);


// string function...
function fullName(str,str2){
    const name = str + str2;
    console.log(name);
}

fullName('Amjad ','chy')


function arraySum(array){
    // console.log(array);
    let sum = 0;
    for(const num of array){
        console.log(num);
        sum +=num;
    }
    return sum;
}

let array = [10, 5,9,1,3,12,6];
let tot = arraySum(array);
console.log('total of array: ',tot);
