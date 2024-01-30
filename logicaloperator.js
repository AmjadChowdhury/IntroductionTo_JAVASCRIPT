let iscar = true;
let gpa = 3.50;
let age = 20;

if(iscar == true || age >= 21){
    console.log("Car jeheto ase meye biye dewa jai, boyosh kom holeo kichu korar nai");
}

if(iscar == true && (gpa >= 3 || age >=21)){
    console.log("car ase gpa ase, r ki lage?");
}

// eta execute hobe na...
if(iscar == true && (gpa >= 3 && age >=21)){
    console.log("car, gpa age sob e lagbe amr");
}


age = 21;
// eta execute hobe...
if(iscar == true && gpa >= 3 && age >=21){
    console.log("car, gpa age sob e lagbe amr");
}
