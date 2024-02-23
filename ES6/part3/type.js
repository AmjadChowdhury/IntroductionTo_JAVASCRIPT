// Javascript is a dynamically typed language...

// primitive data type...
const num = 10;
const name = 'amjad';
let isPlayer = true;

console.log(typeof num,typeof name,typeof isPlayer);
// number string boolean

// Non-primitive data type...

let p = {job : 'web developer'};
let q = p;
// eikhane p=q kore ekoi reference dewa hoise...
// ektar value change hole duitai change hobe eksathe..
// ekdom vitorer full property change korle tkn nirdostotar change hobe..
console.log(p,q);
// { job: 'web developer' } { job: 'web developer' }

// q = {job : 'Front end developer'};
// console.log(p,q);
// { job: 'web developer' } { job: 'Front end developer' }

q.job = 'Backend end developer';
console.log(p,q);
// { job: 'Backend end developer' } { job: 'Backend end developer' }


