function calculateMoney(ticketSale) {
    if(ticketSale < 0){
        return 'Invalid Number';
    }
    const perTicketPrice = 120;
    const darowan = 500;
    const staff = 50;

    const result = (ticketSale * perTicketPrice) - (darowan + (8 * staff));
    
    return result;
}



function checkName(name){
    if(typeof name !== 'string'){
        return 'invalid';
    }
    const p = name[name.length-1];
    if(p === 'a' ||p === 'A' ||p === 'y' ||p === 'Y' ||p === 'i' ||p === 'I' ||p === 'e' ||
    p === 'E' ||p === 'o' ||p === 'O' ||p === 'u' ||p === 'U' ||p === 'w' ||p === 'W'){
        return 'Good Name';
    }
    return 'Bad Name';
}



function deleteInvalids(name){
    if(Array.isArray(name) === false){
        return 'Invalid Array';
    }
    let newArray = [];
    for(const num of name){
        if(typeof num === 'number' &&  isNaN(num) === false){
            newArray.push(num);
        }
    }
    return newArray;
}



function password(obj){
    if(Object.keys(obj).includes('name') && Object.keys(obj).includes('birthYear') &&
    Object.keys(obj).includes('siteName') && obj.birthYear >1000){
        let p = obj.siteName+'#'+obj.name+'@'+obj.birthYear;
        return p;
    }
    return 'invalid';
    
}



function monthlySavings(nameArray,livingCost){
    if(Array.isArray(nameArray) === false || typeof livingCost !== 'number'){
        return 'invalid input';
    }
    let sum = 0;
    for(let i=0;i<nameArray.length;i++){
        if(nameArray[i] >= 3000){
            let num1 = nameArray[i];
            let discount = ((num1*20)/100);
            let finalNum1 = num1 - discount;
            sum = sum + finalNum1;
        }
        else{
            sum = sum + nameArray[i];
        }
    }
    let result = sum - livingCost;
    if(result >= 0){
        return result;
    }
    return 'earn more';
}



