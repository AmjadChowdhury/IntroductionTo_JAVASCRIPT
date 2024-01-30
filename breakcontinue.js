// break   -> I am done with this loop.
// continue-> Skip this iteration..

let num;

for(num=1;num<=200;num++){
    if(num >= 5){
        break;
    }
    console.log(num);
}

for(num=25;num >=10;num--){
    if(num == 22)
    {
        break;
    }
    console.log(num);
}

// divisible by 5..
console.log("Divisible by 5 : ")
for(num=1;num<=50;num++){
    if(num % 5 != 0){
        continue;
    }
    console.log(num);
}