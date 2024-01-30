var num1 = 100;
console.log(num1);

var num2 = '20';
console.log(parseInt(num2));

var num3 = '20.3';
console.log(parseFloat(num3));
console.log(parseInt(num3));

var num4 = parseInt(num2) + parseFloat(num3);
console.log(num4);
console.log(num4.toFixed(3));// string hoye jai
console.log(parseFloat(num4.toFixed(3)));