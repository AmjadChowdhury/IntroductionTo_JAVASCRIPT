// shirt,pant,shoe unit akare takbe,
// function r vitor price set takbe...

function totalCost(shirtQuantity,pantQuantity,shoeQuantity){
    let perShirt = 500;
    let perPant = 800;
    let perShoe = 2000;

    let shirt = shirtQuantity * perShirt;
    let pant = pantQuantity * perPant;
    let shoe = shoeQuantity * perShoe;

    let totalPrice = shirt + pant + shoe;

    return totalPrice;


}

let cost = totalCost(3,2,1);
console.log("Total porse : ",cost);