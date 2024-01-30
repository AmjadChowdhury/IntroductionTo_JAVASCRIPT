let numbers = [3,10,5,8,15];

console.log(numbers);
//Array Size ber kore...
console.log("Length : "+numbers.length);


//Array indexing...index suro hoy 0 teke...
console.log(numbers[3]);
console.log(numbers[0]);

// Push operation...push returns length of an array...
console.log(numbers.push(20));
numbers.push(40);
console.log("Length : "+numbers.length);

//pop operation...return last element.
console.log(numbers);
let p = numbers.pop();
console.log("After pop operation last element "+p);
console.log("Length : "+numbers.length);


//shift pop r ulta...samne teke element remove kore...abong value return kore..

console.log(numbers);
numbers.shift()  // first element delete..
console.log(numbers.shift());  // second element delete o hoise value print korse o..

//unshift samne element add kore...
console.log(numbers);
numbers.unshift(15);
console.log(numbers);



//kono element array te ase kina check kora...
console.log(numbers.includes(7));
if(numbers.includes(8)){
    console.log("8 ase..")
}

// index ber kora element r...
console.log(numbers);
console.log(numbers.indexOf(8));
console.log(numbers.indexOf(3)); // -1 hobe...jeheto value nai..

//array kina check..
let nums = ['amjadchy', 'ershadchy'];
let age = 22;
console.log(Array.isArray(nums)); // True 
console.log(Array.isArray(age)); // False


//join r maddome array element r majkhane kichu dewa jai...kichu na dile koma..
let name = ['amjad', 'ershad', 'esha'];
console.log(numbers.join('|'));
console.log(numbers.join());


//concat r maddome duita array add kora...
console.log(name.concat(nums));
let z = name.concat(nums);
console.log("After concat z array is ",z);

//ekta array k pizzar moto slice kora hoy...

let x = z.slice(1,3); // z array r 1 teke 2 element x nibe...
console.log("After slice ",x);









