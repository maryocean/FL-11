let wantsToPlay;
let min = 0;
let max = 5;
let random;
let userNumber;
let userPrize = 0;
let possiblePrize = 0;
// to avoid fixing 'magic numbers' warnings in code, was pursued to hardcode prizes
let baseMaxPrize = 100;
let baseMidPrize = 50;
let baseMinPrize = 25;
// 'magic numbers' warning fix
let basePrizeMultiplier = 2;


wantsToPlay = confirm('Do you want to play a game?');
while (true) {
    if (wantsToPlay === false) {
        alert('You did not become a billionaire, but can.')
        break;
    } else {
        max = max + 4;
        for (var i = 3; i > 0; i--) {
            random = Math.floor(Math.random() * (max - min)) + min;
            if (i === 3 && random === userNumber) {
                possiblePrize = baseMaxPrize;
                userPrize = baseMaxPrize
            } else if (i === 2 && random === userNumber) {
                possiblePrize = baseMidPrize;
                userPrize = baseMidPrize
            } else if (i === 1 && random === userNumber) {
                possiblePrize = baseMinPrize;
                userPrize = baseMinPrize;
            }
            userNumber = parseInt(prompt('Choose a roulette pocket number from 0 to ' + (max - 1) + ' \n attempts left: ' + i + ' \n Total prize: ' + userPrize + '$' + '\n possible prize: ' + possiblePrize + '$', ''));



        } wantsToPlay = confirm('Congratulation, you won!  Your prize is: ' + userPrize + '$. Do you want to continue?');
        break;
        // else {
        //     wantsToPlay = false;
        //     break;
        // }
    }
    if (wantsToPlay === true) {
        baseMaxPrize *= basePrizeMultiplier;
        baseMidPrize *= basePrizeMultiplier;
        baseMinPrize *= basePrizeMultiplier;
        continue;
    } else {
        alert('Thank you for your participation. Your prize is: ' + userPrize + '$');
        break;
    }
}
