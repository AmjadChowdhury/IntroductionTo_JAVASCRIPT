function removeDupli(numbers){
    let tmp = [];
    for(const num of numbers){
        if(!tmp.includes(num)){
            // jey value ta tmp array te ekbar dukbe sei r dukbe na...
            tmp.push(num);
        }
    }
    return tmp;
}

let array = [2,1,5,1,2,3,6,2,3,6,9];
let remove = removeDupli(array);
console.log(remove);