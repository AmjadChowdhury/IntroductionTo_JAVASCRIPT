// ................toLowerCase() and toUpperCase() end..............

// toLowerCase()
let name1 = "amjadul AlAM ChowdhUry";
console.log(name1.toLowerCase());


let sub = 'IIT';
let book = 'iiT';

if(sub === book){
    console.log("Same same department.");
}
else{
    console.log("Muri khao");
}

if(sub.toLowerCase() === book.toLowerCase()){
    console.log("Same same department.After tolowercase operation.");
}
else{
    console.log("Muri khao");
}

// arekta case ase toUpperCase()
let name = "amjadul AlAM ChowdhUry";
console.log(name.toUpperCase());

// ................toLowerCase() and toUpperCase() end..............


//...............trim start..................

// trim....
// remove space from first and last of string..
name1 = "  Amjad ";
console.log(name1.trim());
let dept = 'chemistry';
let dept1 =' chemistry';

if(dept === dept1.trim()){
    console.log("By triming remove unwanted space...")
}
else{
    console.log("Muri khao.trim kore nai..")
}

//...............trim start..................

//.............slice,split,concat.join,includes......

//slice...
name1 = 'Amjadul Alam chowdhury';
let name2 = name1.slice(8,13);
console.log(name2);

//split...
name1 = 'Ershadul Alam Chowdhury';
// name1 = name1.split();  
name1 = name1.split(' '); // space r upor bitti kore string k vag kore array create kore...
console.log(name1);

//concat...
name1 = 'amjad';
name2 = 'chy';
name1 = name1.concat(' ').concat(name2);
console.log(name1);

//join...
name1 = ['Mohtadi chy','ershad chy','amjad chy'];
console.log(name1.join('--'));

//includes...

name1 = 'amjad Vai neta hobe';
console.log(name1.includes('d')); // true hobe jeheto d ase...


// ...........Reverse.............

// 1..
let address = 'Mukbol matobbor chowdhuryr bari';
let reverse = '';
for(var letter of address){
    reverse = letter + reverse;
}
console.log(reverse);

// 2..
address = 'Mukbol matobbor chowdhuryr bari';
reverse = '';
for(let i=0;i<address.length;i++){
    reverse = address[i] + reverse;
}
console.log(reverse);

// 3..
address = 'Mukbol matobbor chowdhuryr bari';
address_new = address.split('').reverse().join('');
console.log(address_new);
