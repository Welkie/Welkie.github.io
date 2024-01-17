const words = [
    { word: "Trái có màu đỏ, vị ngọt, hình tròn", options: ["Banana", "Orange", "Apple", "Grapes"], correct: "Apple" },
    { word: "Trái có màu vàng, vị ngọt", options: ["Broccoli", "Banana", "Cucumber", "Tomato"], correct: "Banana" },
    { word: "Trái có nhiều hạt màu đỏ", options: ["Pomegranate", "Orange", "Apple", "Grapes"], correct: "Pomegranate" },
    { word: "Trái có màu xanh, có vị béo, hạt to", options: ["Mango", "Avocado", "Cucumber", "Tomato"], correct: "Avocado" },
    { word: "Trái nho tiếng anh là gì", options: ["Melon", "Avocado", "Cucumber", "Grape"], correct: "Grape" },
    // Add more words and options as needed
];

let currentWordIndex = 0;
let score = 0;

function displayWord() {
    const wordDisplay = document.getElementById("word-display");
    const optionsContainer = document.getElementById("options-container");

    wordDisplay.textContent = words[currentWordIndex].word;

    optionsContainer.innerHTML = "";
    words[currentWordIndex].options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });

    const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.play();
}

function checkAnswer(selectedOption) {
    const correctAnswer = words[currentWordIndex].correct;
    const correctSound = document.getElementById("correct-sound");
    const incorrectSound = document.getElementById("incorrect-sound");

    if (selectedOption === correctAnswer) {
        correctSound.play();
        score++;
    } else {
        incorrectSound.play();
    }

    // Move to the next word or end the game
    currentWordIndex++;
    if (currentWordIndex < words.length) {
        displayWord();
    } else {
        alert("Game Over! You completed the vocabulary game.");
    }
    scoreDisplay.textContent = score;
}

function restartGame() {
    currentWordIndex = 0;
    score = 0;
    displayWord();
    scoreDisplay.textContent = score;

    const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

// Initialize the game
displayWord();

// Restart button event listener
document.getElementById("restart-btn").addEventListener("click", restartGame);

