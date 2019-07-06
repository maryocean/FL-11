const a1 = parseInt(prompt('Please, enter a1', ''));
const a2 = parseInt(prompt('Please, enter a2', ''));
const b1 = parseInt(prompt('Please, enter b1', ''));
const b2 = parseInt(prompt('Please, enter b2', ''));
const c1 = parseInt(prompt('Please, enter c1', ''));
const c2 = parseInt(prompt('Please, enter c2', ''));
const two = 2;
if (c1 === (a1 + b1) / two && c2 === (a2 + b2) / two) {
    console.log(true);
} else {
    console.log(false);
}