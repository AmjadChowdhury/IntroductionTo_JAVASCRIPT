const playerScore = [20,80,70,15,18,115];

const selected = playerScore.filter(score => score > 50);
console.log(selected);
// [ 80, 70, 115 ]

const selected1 = playerScore.filter(score => score % 2 === 0);
console.log(selected1);
// [ 20, 80, 70, 18 ]