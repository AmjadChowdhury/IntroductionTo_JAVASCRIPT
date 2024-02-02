const bottle = {
    brand: "chy",
    price: 45,
    color: "White",
    isClean: true
}

// Non-primitive....

const person = {
    name : "Amjadul alam",
    age : 21,
    profession : "Developer",
    salary : 100000000,
    married : false,
    'fav places': ['CRB', 'potenga', 'halishahar', 'jamburi park']
}

// console.log(person);

// 1. Dot notation....
console.log(person.name);
console.log(person.salary);

// 2. Bracket notation....
// etai best....

console.log(person['name']);
console.log(person['age']);
console.log(person['married']);
console.log(person['fav places']);


// object r property change o kora jai....

person.salary = 20000000;
person['married'] = true;
console.log(person['salary']);
console.log(person.married);

const keyName = 'profession';
console.log(person[keyName]);


const subject = {
    name: "IIT",
    techer: "Shamim Kaiser",
    totalStudent: 5000,
    isSera : true,
    chapter : ["first", "Second", "Third"],
    exams : {
        name : "final",
        marks: 100,
        result:{
            gpa: 5.00,
            priority:"top most"
        }
    }
    
}
const keys = Object.keys(subject);
console.log(keys);

const values = Object.values(subject);
console.log(values);

console.log(subject.exams.marks);
console.log(subject.exams.result.priority);

subject.chapter[1] = "2nd";
console.log(subject.chapter);

delete subject.techer;
console.log(subject);


// loop...
// object a for in...
const mobile = {
    brand : "samsung",
    price : 25000,
    color : "black",
    camera: "12mpx"
}

for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

