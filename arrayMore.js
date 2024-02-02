const numbers =  [10, 12, 7, 20, 5];

for(let num of numbers){
    console.log(num);
}

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}


// Reverse...
1.
const fruits = ['Apple', 'Mango', 'Lichu'];
const fruits_rev = [];
for(let i=0;i<fruits.length;i++){
    let item = fruits[i];
    fruits_rev.unshift(item);
}
console.log(fruits_rev);

2. 
const fruits_rev1 = [];
for(let i = fruits.length - 1;i>=0;i--){
    let item = fruits[i];
    fruits_rev1.push(item);
}
console.log(fruits_rev1);


const nums = [2,10,12,20,15,3,7];
const nums1_s = nums.sort();
// [
//     10, 12, 15, 2,
//     20,  3,  7
// ]
console.log(nums1_s);


const nums1_sort = nums.sort(function(a,b){return a-b});
// [
//     2,  3,  7, 10,
//     12, 15, 20
// ]
console.log(nums1_sort);


