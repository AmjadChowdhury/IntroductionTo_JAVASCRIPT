function stopwatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

let watch1 = stopwatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
// 1
// 2
// 3

let watch2 = stopwatch();
console.log(watch2());
console.log(watch2());
console.log(watch2());
console.log(watch2());
// 1
// 2
// 3
// 4