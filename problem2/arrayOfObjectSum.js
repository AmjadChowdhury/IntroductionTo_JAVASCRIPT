let mobiles = [
    {name : 'Realme',price : 24000, camera : '48mp', quantity : 1},
    {name : 'Xiome',price : 48000, camera : '48mp', quantity : 2},
    {name : 'samsung',price : 90000, camera : '48mp', quantity : 3},
    {name : 'Iphon',price : 124000, camera : '48mp', quantity : 2},
    {name : 'Oppo',price : 20000, camera : '48mp', quantity : 1}
]

function sumOfMobiles(phones){
    let sum = 0;
    for(const phone of phones){
        sum += ( phone.price * phone.quantity );
    }
    return sum;
}

let sum = sumOfMobiles(mobiles);
console.log('Mobile price total :',sum);