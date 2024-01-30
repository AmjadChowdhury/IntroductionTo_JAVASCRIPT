let num;

console.log("ODD Number : ")
for(num=1;num<=20;num+=2){
    console.log(num);
}

// Divisible by 5...
console.log("Divisible by 5 : ")
for(num=1;num<=20;num++){
    if(num % 5 == 0){
        console.log(num);
    }
}

// divisible by 3 or 5..
console.log("Divisible by 3 or 5 : ")
for(num=1;num<=20;num++){
    if(num % 3 == 0 || num % 5 == 0){
        console.log(num);
    }
}
// divisible by 3 and 5..
console.log("Divisible by 3 and 5 : ")
for(num=1;num<=30;num++){
    if(num % 3 == 0 && num % 5 == 0){
        console.log(num);
    }
}