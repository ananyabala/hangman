// Alphabet
var alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Wordlist
var hangmanwords = [
    "vogue",
    "runway",
    "minimalism",
    "sequins",
    "pastels",
    "checks",
    "plastic",
    "fringing",
    "sheer",
    "ruffles"
]


function gametime(){
// Pick a random word from the array
var hangmanwords = hangmanwords[Math.floor(Math.random() * hangmanwords.length)];


// Creating the Answer Array,which stores the letters that have been properly guessed:
var answerArray = [];
// Holding the index of a randomly selected word:
var wordCurrent;
for (var i = 0; i < hangmanwords[wordCurrent].length; i++) {
    answerArray.push("_");
    console.log(i);
    
    
}

display();
// console.log(i);
// var remainingLetters = hangmanwords.length;
// console.log(answerArray);
// console.log(remainingLetters);


}
console.log(hangmanwords);
// console.log(i);



// // Capture Keypresses
// var guess = [];
// document.onkeydown = function (event) {
//     if (guess === alphabet) {
//         break;
//     }
//     else {

//         // Update the game state with the guess
//     }

//     console.log(this);
// };
// // Updating the Game State 
// // for (var j=0;j<hangmanwords.length;j++){
// //     if(word[j]===guess){
// //         answerArray[i]= guess;
// //         remainingLetters--;
// //     }
// // }
// // console.log(j);


// Update Display
function display() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("guessWord").innerText = "";
    for (var i = 0; i < answerArray.length; i++) {
        document.getElementById("guessWord").innerText += guessWord[i];
        console.log(this);
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    //    Game Over Screen
    // if(remainingGuesses <=0){
    //     document.getElem
    // }

};




// // Game Code 
// while (remainingLetters > 0) {
//     document.write(answerArray.join(""));
// }




