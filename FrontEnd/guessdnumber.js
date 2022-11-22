let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "It's High! Try Again kid.";
        gameResult.style.backgroundColor = "#fc7b72";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "It's  Low! Try Again kid.";
        gameResult.style.backgroundColor = "#fc7b72";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You won Nothing!.";
        gameResult.style.backgroundColor = "#f59ac0";
    } else {
        gameResult.textContent = "Number enter chey stupid monkey";
        gameResult.style.backgroundColor = "#fc7b729";
    }
}