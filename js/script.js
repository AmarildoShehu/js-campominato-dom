console.log('JS OK');

// Recupero elementi
const grid = document.getElementById('grid');
const button = document.getElementById('play-button');




//funzioni

const startGame = () => {

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
            console.log(i);

            cell.classList.add('clicked');
        });

        //inserisco nella griglia
        grid.appendChild(cell);
    }
};


// listener button

button.addEventListener('click', startGame());