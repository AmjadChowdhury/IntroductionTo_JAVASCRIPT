for(var i =0;i<5;i++){
    console.log('inside ',i);
}
console.log('outside ',i);
// inside  0
// inside  1
// inside  2
// inside  3
// inside  4
// outside  5
// vaire o i man ta access kore..eijonno let use kori...

fifth();

// sudu function likle seta ekdom upore niye jai..jar karone jkn tkn functon declare kora jay..
function fifth(){
    console.log('The number is 5');
}

// but variable diye function declare korle setar khtre function nich teke call korte hoy...
const ten = function(){
    console.log('The number is 10');
}

ten();