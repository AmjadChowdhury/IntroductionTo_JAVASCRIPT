let mobile = [
    {name : 'realme',price : 22000,camera: '48mp'},
    {name : 'Xiome',price : 30000,camera: '50mp'},
    {name : 'Iphone',price : 122000,camera: '64mp'},
    {name : 'samsung',price : 48000,camera: '48mp'},
    {name : 'oppo',price : 20000,camera: '50mp'},
]

// valuable phone eber korbo price r maddome...

function valuable(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

let valuablePhone = valuable(mobile);
console.log('Valuable phone details : ',valuablePhone);