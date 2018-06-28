// Grab reference to my DOM element
var $newGameButton = document.getElementById("new-game-button");
var $placeholders = document.getElementById("placeholders");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
// Create variables for game wordbank, wins, losses, pickedword, guessesleft, gamerunning, pickedWordPlaceholder, guessedLetterbank, incorrectLetterbank
wordBank = ["vogue",
    "runway",
    "minimalism",
    "sequins",
    "pastels",
    "checks",
    "plastic",
    "fringing",
    "sheer",
    "ruffles"];
wins = 0;
losses = 0;
pickedWord = "";
guessesLeft = 8;
gamerunning = false;
pickedWordPlaceholderArray = [];
guessedLetterBank = [];
incorrectLetterBank = [];

// Create a new game function to reset all stats, pick new word and create placeholders

function newGame() {
    // Reset all game info
    gamerunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArray = [];
    // Pick a new word
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    // Create placeholders out of new pickedWord
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === '') {
            pickedWordPlaceholderArray.push('');
        } else {
            pickedWordPlaceholderArray.push('_ ');
        }
    }

    // Write all game stuff to DOM 
    $guessesLeft.textContent = guessesLeft;
    $placeholders.textContent = pickedWordPlaceholderArray.join('');
    $guessedLetters.textContent = incorrectLetterBank;
    // $wins.textContent=wins++;
    // $losses.textContent=losses++;

}

// letterGuess function takes in the letter you pressed and sees if it is in the selected word
function letterGuess(letter) {
    console.log(letter);

    if (gamerunning === true && guessedLetterBank.indexOf() === -1) {
        // Run Game Logic
        // Want to store the guessed letter in the guessedLetterBank
        guessedLetterBank.push(letter);
        // Check if guess letter is in my picked word
        for (var i = 0; i < pickedWord.length; i++) {

            // Convert all letters in pickedWord to lower case

            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                // If guessed letter is a letter in the picked word, loop through picked word and replace _ with guessed letter
                pickedWordPlaceholderArray[i] = pickedWord[i];
                console.log(pickedWordPlaceholderArray);
            }
        }

        $placeholders.textContent = pickedWordPlaceholderArray.join('');

        checkIncorrect(letter);



    } else {
        if (!gamerunning) {
            alert("Game is not running. Click on the 'Start New Game' button to play!");
        }
        else {
            alert("You've already guessed this letter, try a new one")
        }
    }
}
// checkIncorrect

function checkIncorrect(letter) {
    if (pickedWordPlaceholderArray.indexOf(letter.toLowerCase()) === -1 && pickedWordPlaceholderArray.indexOf(letter.toUpperCase()) === -1) {
        guessesLeft--;
        incorrectLetterBank.push(letter);
        $guessedLetters.textContent = incorrectLetterBank;
        $guessesLeft.textContent = guessesLeft;

    }
    checkLoss();
}
// checkLose
function checkLoss(){
    if(guessesLeft===0){
        losses++;
        gamerunning=false;
        $losses.textContent=losses;
        alert('You Lose!');
    }
    checkWin();
}
// checkWin
function checkWin(){
    if(pickedWord.toLowerCase()===pickedWordPlaceholderArray.join('').toLowerCase()){
        wins++;
        gamerunning=false;
        $wins.textContent=wins;
        alert('You win!');
    }
}
// Add event listener for new game button
$newGameButton.addEventListener('click', newGame);
// Add on key up event to trigger letter guess
document.onkeyup = function (event) {
    console.dir(event);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}
