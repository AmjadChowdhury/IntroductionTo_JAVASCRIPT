let heights = [63,65,74,71,62,70];
console.log(heights);

// max function of array....
function getMax (numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

let max = getMax(heights);
console.log("The max of array is : ",max);

// min function of array....
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

let min = getMin(heights);
console.log("The min of array is : ",min);
