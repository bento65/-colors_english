const colors = [
    "Red", "Blue", "Green", "Yellow", "Purple", "Orange", 
    "Pink", "Cyan","Black", "White", "Magenta", "Lime", "Brown", "Navy", 
    "Teal", "Violet", "Gold", "Salmon", 
];

let score = 0;
let timeLeft = 60;
let timer;

document.getElementById("start-button").addEventListener("click", startGame);

function startGame() {
    score = 0;
    timeLeft = 60;
    document.getElementById("score").textContent = score;
    document.getElementById("time-left").textContent = timeLeft;
    document.getElementById("start-button").disabled = true;
    timer = setInterval(updateTime, 1000);
    generateColor();
}

function generateColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("color-name").textContent = randomColor;

    const colorsContainer = document.getElementById("colors");
    colorsContainer.innerHTML = '';

    colors.forEach(color => {
        const colorDiv = document.createElement("div");
        colorDiv.classList.add("color");
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener("click", () => handleColorClick(color, randomColor));
        colorsContainer.appendChild(colorDiv);
    });
}

function handleColorClick(selectedColor, correctColor) {
    if (selectedColor === correctColor) {
        score++;
        document.getElementById("score").textContent = score;
    }
    generateColor();
}

function updateTime() {
    timeLeft--;
    document.getElementById("time-left").textContent = timeLeft;
    if (timeLeft === 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(timer);
    alert(`Fim de Jogo! Sua pontuação é ${score}.`);
    document.getElementById("start-button").disabled = false;
}
