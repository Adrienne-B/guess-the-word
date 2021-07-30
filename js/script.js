const guessLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector("guess");
const typeLetter = document.querySelector(".letter");
const wordInProgrss = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hitButton = document.querySelector(".play-again");
//End of (group) global variables

let word = "magnolia";//magnolia will be a word to test start the game until I fetch words ffrom a hosted file in a later step.
const guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function () {
	const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
	
	const words = await response.text();
	const wordArray = words.split("\n");
	const randomIndex = Math.floor(Math.random()n* wordArray.length);
	word = wordArray[randomIndex].trim();
	placeholder(word);
//function to add placeholders for each letter
};


getWord();


//Symbols will show as the placehilder for a specific letter choice.
const placeholder = function (word) {
	const temperaryLetters = [];
		for (const letter of word) {
			console.log(letter);
			temperaryLetters.push("●");
	}
	
wordInProgress.innerText = temperaryLetters.join("");
};

guessButton.addEventListener("click", function (e) {
	e.preventDefault();
	
	message.innerText = "";
	const guess = letterInput.value;
	const goodGuess = validateInput(guess);
	
	
	
	if (goodGuess) {
		makeGuess(guess);	
	}
	
	letterInput.value = "";
	
});
	

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    // Is the input empty?
    message.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    // Did you type more than one letter?
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    // Did you type anything else that was not a letter?
    message.innerText = "Please enter a letter from A to Z.";
  } else {
    // We finally got a letter!
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, silly. Try again.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
	updateGuessesRemaining(guess);
	showGuessedLetters();
	updateGuessesRemaining(guessedLetters);  
  }
};


const showGuessedLetters = function () {
  // Clear the list first
  guessedLettersElement.innerHTML = "";
  for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    guessedLettersElement.append(li);
  }
};


const updateWordInProgress = function (guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  const revealWord = [];
  for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
      revealWord.push(letter.toUpperCase());
    } else {
      revealWord.push("●");
    }
  }
  // console.log(revealWord);
  wordInProgress.innerText = revealWord.join("");
  checkIfWin();
};

const updateGuessesRemaining = function (guess) {
  const upperWord = word.toUpperCase();
  if (!upperWord.includes(guess)) {
    message.innerText = `Sorry, the word has no ${guess}.`;
    remainingGuesses -= 1;
  } else {
    message.innerText = `Good guess! The word has the letter ${guess}.`;
  }

  if (remainingGuesses === 0) {
    message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
  } else if (remainingGuesses === 1) {
    remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
  } else {
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
  }
};



const checkIfWin = function () {
  if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
	  
	 startOver(); 
  }
};


const startOver = function () {
  guessButton.classList.add("hide");
  remainingGuessesElement.classList.add("hide");
  guessedLettersElement.classList.add("hide");
  playAgainButton.classList.remove("hide");
};

playAgainButton.addEventListener("click", function () {
  // reset all original values - grab new word
  message.classList.remove("win");
  guessedLetters = [];
  remainingGuesses = 8;
  remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
  guessedLettersElement.innerHTML = "";
  message.innerText = "";
  // Grab a new word
  getWord();

  // show the right UI elements
  guessLetterButton.classList.remove("hide");
  playAgainButton.classList.add("hide");
  remainingGuessesElement.classList.remove("hide");
  guessedLettersElement.classList.remove("hide");
});











//const guess = typeLetter.value;
	//console.log(guess);
	//typeLetter.value = "";
//});
							




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