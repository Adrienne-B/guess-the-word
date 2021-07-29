const guessLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector("guess");
const typeLetter = document.querySelector(".letter");
const wordInProgrss = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hitButton = document.querySelector(".play-again");
//End of (group) global variables

const word = "magnolia";
//magnolia will be a word to test start the game until I fetch words ffrom a hosted file in a later step.

const placeholder = function (word) {
	
const temperaryLetters = [];
	for (const letter of word) {
		console.log(letter);
		temperaryLetters.push("●");
}
	
wordInProgress.innerText = temperaryLetters.join("");
};

placeholder(word);
//function to add placeholders for each letter

guessButton.addEventListener("click", function (e) {
	e.preventDefault();
	const guess = typeLetter.value;
	console.log(guess);
	typeLetter.value = "";
});
							




//function generatLetter ()
//{
//const alphabet = "abcdefghijklmnopqrstuvwxyz"

//return alphabet[Math.Floor(Math.random()*alphabet.length)]
//}

//console.log(generateRandomLetter()) // "w"
//console.log(generateRandomLetter()) // "i"
//console.log(generateRandomLetter()) // "b"
//console.log(generateRandomLetter()) // "v"
//console.log(generateRandomLetter()) // "s"
//console.log(generateRandomLetter()) // "c"
//console.log(generateRandomLetter()) // "m"
//console.log(generateRandomLetter()) // "j"
//console.log(generateRandomLetter()) // "x"
//console.log(generateRandomLetter()) // "n"
//console.log(generateRandomLetter()) // "d"
//console.log(generateRandomLetter()) // "q"
//console.log(generateRandomLetter()) // "y"
//console.log(generateRandomLetter()) // "a"
//console.log(generateRandomLetter()) // "t"
//console.log(generateRandomLetter()) // "h"
//console.log(generateRandomLetter()) // "o"
//console.log(generateRandomLetter()) // "e"
//console.log(generateRandomLetter()) // "k"
//console.log(generateRandomLetter()) // "f"
//console.log(generateRandomLetter()) // "l"
//console.log(generateRandomLetter()) // "u"
//console.log(generateRandomLetter()) // "p"
//console.log(generateRandomLetter()) // "r"
//console.log(generateRandomLetter()) // "g"
//onsole.log(generateRandomLetter()) // "r"
//console.log(generateRandomLetter()) // "z"