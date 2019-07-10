function addOne(x) {
    return x + 1;
}

function pipe() {
    let number = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        number = arguments[i](number);
    }
    return number;
}

console.log(pipe(1, addOne, addOne));