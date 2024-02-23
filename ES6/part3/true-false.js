/*
truth ->
1.if any number except 0
2.if any string except '';
3.{}obejct empty or have
4.[]array empty or have

false ->
1. undefined
2. null
3. ''
4. 0
*/

let x = 4;
if(x){
    console.log('Value of x is truthy');
}
else{
    console.log('Value of x is falsy');
}