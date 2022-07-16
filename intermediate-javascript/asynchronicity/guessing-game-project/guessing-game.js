const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

function randomInRange(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

rl.question('Enter minimum number: ', (askRange));
function askRange(inputMin){
    min = inputMin;
    rl.question('Enter the maximum number: ', (inputMax) => {
    max = inputMax;
    secretNumber = randomInRange(Number(min), Number(max));
    console.log("I'm thinking of a number between " + min + " and " + max);

    rl.question('Enter a guess: ', (askGuess)); //accepting input
    });
}

function askGuess(inputNum) {
    if(checkGuess(Number(inputNum))){ //converting default string input into
        rl.close();
    }
    else rl.question('Guess again! ', (askGuess))
}

let checkGuess = (num) => {
    if(num === secretNumber){
        console.log("Correct!");
        return true;
    }
    else if(num > secretNumber){
        console.log("Too high");
        return false;
    }
    else if(num < secretNumber){
        console.log("Too low");
        return false;
    }
}
