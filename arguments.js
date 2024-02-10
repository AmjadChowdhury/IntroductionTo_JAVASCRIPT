function add(num1,num2){
    console.log(num1,num2);
    // 12 13
    console.log(arguments);
    // [Arguments] { '0': 12, '1': 13, '2': 10, '3': 9 }

    let sum = 0;
    for(let num of arguments){
        sum += num;
    }
    console.log("sum =",sum);  // 44;
}

add(12,13,10,9);