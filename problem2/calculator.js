function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

// asol function..
function calculator(a,b,c){
    if(c === '+'){
        return add(a,b);
    }
    else if(c === '-'){
        return sub(a,b);
    }
    else if(c === '*'){
        return mul(a,b);
    }
    else if(c === '/'){
        return div(a,b);
    }
    else{
        return "Not found";
    }
}

let x = calculator(7,5,'*');
console.log('By using calculator function where inner function is mul :',x);