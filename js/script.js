console.log('JS OK');

// Recupero elementi
const grid = document.getElementById('grid');
const button = document.getElementById('play-button');




//funzioni

const startGame = () => {

    button.innerText = 'Restart';
    //Svuota griglia
    grid.innerText = '';

    //Grid
    for (let i = 1; i <= 100; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.append(i);
        grid.appendChild(cell);
    }
};


// listener button

button.addEventListener('click', startGame());