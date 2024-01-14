console.log('JS OK');

const grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');
const scoreDisplay = document.getElementById('score-display');



const rows = 10;
const cols = 10;
const totalCells = rows * cols;
const bombCount = 16;
let createGrid = false;
let cellCount = 1;
let score = 0;
let clickedCells = [];
let bombPositions = [];
const maxScore = totalCells - bombCount;
let gameOver = false;

function generateRandomNumbers(quantity, max) {
    const numbers = [];
    while (numbers.length < quantity) {
        const randomNumber = Math.floor(Math.random() * max);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function createGridFunction() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';

            const index = i * cols + j + 1;  // Aggiungi 1 per iniziare da 1 invece di 0

            cell.textContent = index;  // Utilizza l'indice della cella nella griglia
            grid.appendChild(cell);

            cell.addEventListener('click', cellClickHandler);
            cell.setAttribute('data-index', index);
        }
    }
}

function resetGame() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    cellCount = 1;
    score = 0;
    clickedCells = [];
    bombPositions = [];
    gameOver = false;
}

function updateScore() {
    scoreDisplay.textContent = "Punteggio: " + score;
}

function endGame(isVictory) {
    // Nascondi la griglia e mostra il messaggio di gioco terminato
    grid.style.display = 'none';
    const gameOverMessage = document.getElementById('game-over-message');
    gameOverMessage.style.display = 'block';

    const resultMessage = document.getElementById('result-message');
    const finalScore = document.getElementById('final-score');

    if (isVictory) {
        resultMessage.textContent = "Congratulazioni! Hai vinto!";
    } else {
        resultMessage.textContent = "Mi dispiace, hai perso.";
    }

    finalScore.textContent = "Il tuo punteggio finale è: " + score;
}

function cellClickHandler(event) {
    if (gameOver) {
        console.log("Il gioco è già terminato.");
        return;
    }

    const clickedCell = event.target;

    if (!clickedCells.includes(clickedCell)) {
        const cellNumber = clickedCell.textContent;
        console.log("Hai cliccato sulla cella: " + cellNumber);

        const index = parseInt(clickedCell.getAttribute('data-index'));
        if (bombPositions.includes(index)) {
            console.log("Boom! Hai colpito una bomba. Partita terminata!");
            endGame(false);
            gameOver = true; // Imposta il gioco come terminato
        } else {
            clickedCell.classList.add('clicked');
            score++;
            console.log("Il tuo punteggio attuale è: " + score);
            updateScore();
            clickedCells.push(clickedCell);

            if (score === maxScore) {
                console.log("Congratulazioni! Hai raggiunto il punteggio massimo. Partita vinta!");
                endGame(true);
                gameOver = true; // Imposta il gioco come terminato
            }
        }
    } else {
        console.log("Hai già cliccato su questa cella. Scegline un'altra.");
    }
}

playButton.addEventListener('click', function () {
    resetGame();
    createGrid = true;
    bombPositions = generateRandomNumbers(bombCount, totalCells);

    updateScore();
    createGridFunction();
});
console.log(document.getElementById('game-over-message'));
