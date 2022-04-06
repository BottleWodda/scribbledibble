function makeGrid (row = prompt('Choose width. (Max 50)'), 
                   col = prompt('Choose height. (Max 50)')) {

    if (row > 50 || col > 50) {
        return alert('Your choice was too high, idiot.');
    }
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
        document.getElementById('container').appendChild(row);
    }
}

function reset() {

    }


