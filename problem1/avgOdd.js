function arrayFunc(numbers){
    let tmp = [];
    let sum = 0;
    for(const num of numbers){
        if(num % 2 === 1){
            tmp.push(num);
            sum += num;
        }
    }
    console.log('Total odd number :',tmp.length);
    let avg = sum / tmp.length;
    console.log("Odd average is : ",avg);
}

let array = [10,15,3,2,4,9];
arrayFunc(array);