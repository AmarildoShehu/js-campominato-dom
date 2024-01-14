console.log('JS OK');

// Recupero elementi
const grid = document.getElementById('grid');
const button = document.getElementById('play-button');
const levelSelect = document.getElementById('select-level');
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
    
    //recupero valore select
    const level = levelSelect.value;
    //assegno la classe alla griglia
    grid.classList.add(level);
    console.log(grid.classList);

    //crazione di colls e row
    let rows = 10;
    let cols = 10;

    switch (level) {
        case 'normal':
            rows = 9;
            cols = 9;
            break;
        case 'hard':
            rows = 7;
            cols = 7;
            break;
    }

    const totalCells = rows * cols;



    //Generiamo celle
    for (let i = 1; i <= totalCells; i++){
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