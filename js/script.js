console.log('JS OK');

// 1. Creare con js una griglia 10x10
// 2. Ogni cella deve avere un numero progressivo da 1 a 100
// 3. Quando il cliente clicca il pulsante plauìy appare la griglia

// prendo gli elementi
const grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');

// 1.creo costanti row e cols
const row = 10;
const cols= 10;
const totCells= row * cols;

// Flag per controllare se la griglia è già stata creata
let createGrid = false;

//contatore numeri delle celle
let cellCount = 1;

//funzione al creazione griglia
function createGridFunction(){
//ciclo per creare le cell numerate
        for (let i = 0; i < totCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';

            cell.textContent = cellCount;
            cellCount++;     

            grid.appendChild(cell);

            //Evenet listner click sulle celle
            cell.addEventListener('click', function(event) {
                const clickedCell = event.target;
                const cellNumber = clickedCell.textContent;
                console.log("Hai cliccato sulla cella: " + cellNumber);
                
                //aggiungo la classe clicked
                clickedCell.classList.add('clicked')
            });
        }
}

// Funzione per reset griglia
function resetGrid() {
    // Rimuovo tutti gli elementi figli della griglia
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    // Resetto il contatore delle celle
    cellCount = 1; 
}