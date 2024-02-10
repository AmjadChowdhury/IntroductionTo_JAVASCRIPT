const mobiles = [
    {name : 'xiome phone', price : 21000},
    {name : 'xiome laptop', price : 21000},
    {name : 'Iphone', price : 21000},
    {name : 'mac laptop', price : 21000},
    {name : 'realme Phone', price : 21000}
]

function searching(mobiles,searchKey){
    let newArray = [];
    for(let mobile of mobiles){
        // console.log(mobile.name.toLowerCase().includes('phone'))
        if(mobile.name.toLowerCase().includes(searchKey.toLowerCase())){
            // console.log(searchKey,' kinle asen');
            newArray.push(mobile);
        }
    }
    return newArray;
}

let p = searching(mobiles,'phone');
console.log(p);
p = searching(mobiles,'laptop');
console.log(p);
