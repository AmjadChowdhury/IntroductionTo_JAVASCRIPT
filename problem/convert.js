function inchToFeet(num){
    let fractionalFeet = num / 12;
    let feet = parseInt(fractionalFeet);

    // let inch = num - (feet*12);
    let inch = num % 12;
    console.log(feet,' feet, ',inch,' inch');
}

inchToFeet(75);

function milesTiKilo(num){
    let km = num * 1.60934;
    console.log(km.toFixed(2),'Kilometer.');
}

milesTiKilo(15);