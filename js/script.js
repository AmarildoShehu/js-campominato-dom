console.log('JS OK');

// Recupero elementi
const grid = document.getElementById('grid');
const button = document.getElementById('play-button');
const level = document.getElementById('select-level');
const select = document.querySelector('select');




//funzioni

const startGame = event => {

    //blocco ricarica pagina
    event.preventDefault();

    //Funzione creare celle
    const createCell = cellNumber => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.append(cellNumber);
        return cell;
    }

    //testo Button modificato
    button.innerText = 'Restart';
    
    // svuoto griglia
    grid.innerText = '';
    
    //Generiamo celle
    for (let i = 1; i <= 100; i++){
        //creo cella
        const cell = createCell(i);

        //cella cliccabile
        cell.addEventListener('click', () => {
            if (cell.classList.contains('clicked')) return;
            cell.classList.add('clicked');
            console.log(i);
        });

        //inserisco nella griglia
        grid.appendChild(cell);
    }
};


// listener button

button.addEventListener('click', startGame);