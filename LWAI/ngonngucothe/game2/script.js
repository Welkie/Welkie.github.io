// script.js 

// Array of words to choose from 
const words = [
	"one",
	"two",
	"three",
	"four",
	"five",
];

// Geting random word from the list 
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
console.log(selectedWord);

// To store the already guessed letters 
let guessedlist = [];

// For initial display Word 

let displayWord = "";
for (let i = 0; i < selectedWord.length; i++) {
	displayWord += "_ ";
}
document.getElementById("displayWord").textContent = displayWord;

// Function to check Guessed letter 

function guessLetter() {
	const backgroundMusic = document.getElementById('background-music');
	backgroundMusic.play();

	let inputElement =
		document.getElementById("letter-input");

	// To check empty input 
	if (!inputElement.value) {
		alert("Hộp đầu vào trống. Vui lòng thêm chữ cái đầu vào");
		return;
	}

	let letter = inputElement.value.toLowerCase();

	// Clear the input field 
	inputElement.value = "";

	// Check if the letter has already been guessed 
	if (guessedlist.includes(letter)) {
		alert("Bạn đã đoán chữ cái đó rồi");
		return;
	}

	// Add the letter to the guessed letters array 
	guessedlist.push(letter);

	// Update the word display based on the guessed letters 
	let updatedDisplay = "";
	let allLettersGuessed = true;
	for (let i = 0; i < selectedWord.length; i++) {
		if (guessedlist.includes(selectedWord[i])) {
			updatedDisplay += selectedWord[i] + " ";
		} else {
			updatedDisplay += "_ ";
			allLettersGuessed = false;
		}
	}
	document.getElementById("displayWord")
		.textContent = updatedDisplay;

	// Check if all letters have been guessed 
	if (allLettersGuessed) {
		alert("Chúc mừng! Bạn đã đoán đúng từ!");
	}
}


