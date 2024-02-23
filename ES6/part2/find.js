// find r khetre condition match korle prothom element dibe nahoy undefined dibe..

const marks = [40,70,82,55,66,98];

const result = marks.find(num => num > 80);
console.log(result);
// 82

const result1 = marks.find(num => num > 100);
console.log(result1);
// undefined