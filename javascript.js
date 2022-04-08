function createGrid(row, col) {
    row = col = prompt('Enter grid size from 2-100.')

    for (let i = 0; i <row; i++) {    //creates a div for number in 'row' parameter
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row';

        for (let j = 0; j < col; j++) {     //creates a div for number in 'col' parameter
            let column = document.createElement('div');
            column.className = 'column';
            column.id = 'column';
            row.appendChild(column);
            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = 'black';
            });
        }
        document.getElementById('gridContainer').appendChild(row);
    }
}

function newCanvas() {
    const erase = document.getElementById('gridContainer');
    while (erase.hasChildNodes()) {
        erase.removeChild(erase.firstChild)
    }
}

function rainbow() {

}

function oneInTenBlack() {

}
