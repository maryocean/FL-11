function getMin() {
    var i;
    var min = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

console.log(getMin(3, 0, -3));
