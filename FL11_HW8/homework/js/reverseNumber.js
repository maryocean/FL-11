function reverseNumber(n) {
    let negative = n < 0;
    let digit, result = 0;
    while (n) {
        digit = n % 10;
        result = (result * 10) + digit;
        n = parseInt(n / 10);
    }
    if (negative) {
        result * -1;
    }
    return result;
}

console.log(reverseNumber(-456));



