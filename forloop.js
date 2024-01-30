// for(first part;second part;third part){
//     loop statement
// }
// first part ->loop variable declaration
// second part->loop Condition
// third part ->loop variable change

let num;
for(num = 1;num<=10;num++){
    console.log(num);
}

//even number..
console.log("Even number");
for(num = 2;num<=10;num+=2){
    console.log(num);
}

//jog korbo...
let sum = 0;
for(num = 1;num<=10;num++){
    sum+=num;
    console.log("number hocce "+num);
    console.log("jog kore  "+sum);
}

//decremental for loop....
for(num = 10;num >= 0;num-=2){
    console.log(num);
}