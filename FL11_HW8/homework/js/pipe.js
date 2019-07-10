function addOne(x) {
    return x + 1;
}

function pipe() {
    let number = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let func = arguments[i];
        number = func(number);
    }
    return number;
}

let res = pipe(3, addOne, addOne, addOne, addOne, addOne);
console.log(res);