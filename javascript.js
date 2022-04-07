function createGrid(row, col) {
    //row = col = prompt('Enter grid size from 2-100.')

    for (let i = 0; i <row; i++) {    //creates a div for number in 'row' parameter
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < col; j++) {     //creates a div for number in 'col' parameter
            let column = document.createElement('div');
            column.className = 'column';
            row.appendChild(column);
            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = 'black';
            });
        }
        document.getElementById('gridContainer').appendChild(row);
    }
}

function newCanvas() {

}

function rainbow() {

}

function oneInTenBlack() {

}

createGrid(40, 40);