const words = [
    { word: "Quyển sách tiếng anh là gì?", options: ["Book", "Pencil", "Pen", "Calculator"], correct: "Book" },
    { word: "Cây thước tiếng anh là gì?", options: ["Crayon", "Ruler", "Notebook", "Tomato"], correct: "Ruler" },
    { word: "Bút sáp màu tiếng anh là gì?", options: ["Banana", "Eraser", "Blackboard", "Crayon"], correct: "Crayon" },
    { word: "Cục gôm tiếng anh là gì?", options: ["Eraser", "Backpack", "Calculator", "Ruler"], correct: "Eraser" },
    { word: "Viết đúng từ cái cặp trong tiếng anh", options: ["Packpack", "Backback", "Backpack", "Packback"], correct: "Backpack" },
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

