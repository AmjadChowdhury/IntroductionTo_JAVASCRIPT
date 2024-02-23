const score = [20,3,2,5,9,10];

const sumScore = score.reduce((prev,current) => prev + current,0);
console.log(sumScore);
// 49