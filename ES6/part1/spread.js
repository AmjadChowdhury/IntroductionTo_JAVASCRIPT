const numbers = [10,8,25,35,2,5,100,85];
const maxNum = Math.max(...numbers);
console.log(maxNum);

const newNumbers = [1,2,...numbers,10,15];
console.log(newNumbers);