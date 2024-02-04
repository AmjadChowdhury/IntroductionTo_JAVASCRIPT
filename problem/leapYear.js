function leapYear(year){
    if((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0))
    {
        return true;
    }
    else{
        return false;
    }
}

let isLeap = leapYear(2024);
console.log(isLeap);

isLeap = leapYear(2100);
console.log(isLeap);

isLeap = leapYear(2400);
console.log(isLeap);
