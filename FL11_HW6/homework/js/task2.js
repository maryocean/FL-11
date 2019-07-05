const a = parseInt(prompt('Enter a numeric values'));
const b = parseInt(prompt('Enter b numeric values'));
const c = parseInt(prompt('Enter c numeric values'));
if (a < b + c && b < a + c && c < a + b) {
    console.log('Triangle exist.')
    
    if (a === b && b === c) {
        console.log('Equivalent triangle')
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle does not exist..');
}
