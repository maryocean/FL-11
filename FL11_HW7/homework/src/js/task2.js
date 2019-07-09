// to reset game state
let startMax = 5;
let startUserPrize = 0;
let startBaseMaxPrize = 100;
// game properties
let min = 0;
let max = startMax;
let step = 4;
let random;
let userNumber;
let userPrize = startUserPrize;
let baseMaxPrize = startBaseMaxPrize;
let possiblePrize = 0;
// 'magic numbers' warning fix
let basePrizeMultiplier = 2;

let wantsToPlay = confirm('Do you want to play a game?');
if (wantsToPlay === false) {
    alert('You did not become a billionaire, but can.');
} else {
    while (wantsToPlay) {
        max = max + step;
        random = Math.floor(Math.random() * (max - min)) + min;
        possiblePrize = baseMaxPrize;
        wantsToPlay = false;
        let win = false;
        for (let i = 3; i > 0; i--) {
            userNumber = parseInt(prompt(' Choose a roulette pocket number from 0 to ' +
                (max - 1) + ' \n Attempts left: ' + i + ' \n Total prize: ' +
                userPrize + '$' + '\n Possible prize: ' + possiblePrize + '$', ''));

            if (random === userNumber) {
                win = true;
                userPrize += possiblePrize;
                break;
            }
            // prize goes two times smaller everytime user did not guess
            possiblePrize /= basePrizeMultiplier;
        }

        if (win) {
            baseMaxPrize *= basePrizeMultiplier;
            wantsToPlay = confirm('Congratulation, you won! Your prize is: ' + userPrize
                + '$. Do you want to continue?');
        }

        if (wantsToPlay === false) {
            alert('Thank you for your participation. Your prize is: ' + userPrize + '$');
            wantsToPlay = confirm('Do you want to play again?');
            // reset game state
            max = startMax;
            userPrize = startUserPrize;
            baseMaxPrize = startBaseMaxPrize;
        }
    }
}