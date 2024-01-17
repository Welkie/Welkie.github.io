const words = [
    { word: "Quả bóng tiếng anh là gì?", options: ["Book", "Boat", "Plane", "Ball"], correct: "Ball" },
    { word: "Viên bi tiếng anh là gì?", options: ["Marble", "Ruler", "Rubik", "Tomato"], correct: "Marble" },
    { word: "Con khủng long tiếng anh là gì?", options: ["Banana", "Eraser", "Dinosaur", "Crayon"], correct: "Dinosaur" },
    { word: "Tên lửa tiếng anh là gì?", options: ["Rocket", "Dinosaur", "Calculator", "Ruler"], correct: "Rocket" },
    { word: "Máy bay tiếng anh là gì", options: ["Plane", "Pinwheel", "Car", "Ball"], correct: "Plane" },
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

