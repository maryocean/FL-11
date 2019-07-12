function reverseNumber(n) {
    let digit, result = 0;
    while (n) {
        digit = n % 10;
        result = (result * 10) + digit;
        n = parseInt(n / 10);
    }
    return result;
}

console.log(reverseNumber(456));



