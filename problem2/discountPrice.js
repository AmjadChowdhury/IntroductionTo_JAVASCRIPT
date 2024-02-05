function discount(quantity){
    let first100Price = 100;
    let second100Price = 90;
    let abovePrice = 70;

    if(quantity <= 100){
        let total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        let first100total = 100 * first100Price;
        let remaining = quantity - 100;
        let remainingTotal = remaining * second100Price;
        let total = first100total + remainingTotal;
        return total;
    }
    else{
        let first100total = 100 * first100Price;
        let second100total = 100 * second100Price;
        let remaining = quantity - 200;
        let remainingTotal = remaining * abovePrice;
        let total = first100total + second100total + remainingTotal;
        return total;
    }
}

let x = discount(202);
console.log('By getting discount, price :',x);