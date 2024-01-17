const words = [
    { word: "Chữ cái đầu tiên trong bảng chữ cái tiếng Anh là gì?", options: ["A", "B", "C", "D"], correct: "A" },
    { word: "Chữ cái cuối cùng trong bảng chữ cái tiếng Anh là gì?", options: ["W", "X", "Y", "Z"], correct: "Z" },
    { word: "Chữ cái nào đứng trước chữ 'G' trong bảng chữ cái tiếng Anh?", options: ["E", "F", "G", "H"], correct: "F"},
    { word: "Chữ cái 'M' được viết thường như thế nào trong bảng chữ cái tiếng Anh?", options: ["M", "n", "N", "m"], correct: "m" },
    { word: "Chữ cái 'R' được viết thường như thế nào trong bảng chữ cái tiếng Anh?", options: ["r", "R", "Rr", "rR"], correct: "r" }
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

