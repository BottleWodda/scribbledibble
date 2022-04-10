//User inputs canvas size and draws in black
function createGrid(row, col) {
    row = col = prompt('Enter grid size from 2-100.')
    
    while (row > 100 || row < 2) {
        row = col = prompt('Enter grid size from 2-100.')
    }
        
    for (let i = 0; i <row; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row';

        for (let j = 0; j < col; j++) {
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

//Erases all drawing and user inputted grid
function newCanvas() {
    const erase = document.getElementById('gridContainer');
    while (erase.hasChildNodes()) {
        erase.removeChild(erase.firstChild)
    }
}

function clickToDraw(row, col) {
    alert('Click to draw enabled.')
    row = col = prompt('Enter grid size from 2-100.')
    
    while (row > 100 || row < 2) {
        row = col = prompt('Enter grid size from 2-100.')
    }
    
    for (let i = 0; i <row; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row';

    for (let j = 0; j < col; j++) {
        let column = document.createElement('div');
        column.className = 'column';
        column.id = 'column';
        row.appendChild(column);
        column.addEventListener('click', () => {
            column.style.backgroundColor = 'black';
        });
    }
    document.getElementById('gridContainer').appendChild(row);
    }
}



//creates random selection of rgb colours
function colors() {
    let colorArray = [];    
  
    for(let i =0; i < 3 ; i++){
      colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
    }
    // rgb -> hex
    let color = colorArray
      .map( x => x.toString(16))
      .join('');

    return `#${color}`;
  }

  //User inputs canvas size and draws in random RGB
  function rainbow(row, col) {
    alert('Rainbow Mode Activated');
    row = col = prompt('Enter grid size from 2-100.')
        
    while (row > 100 || row < 2) {
            row = col = prompt('Enter grid size from 2-100.')
        }
   
    for (let i = 0; i <row; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row';

        for (let j = 0; j < col; j++) {
            let column = document.createElement('div');
            column.className = 'column';
            column.id = 'column';
            row.appendChild(column);
            column.addEventListener('mouseover', () => {
                column.style.backgroundColor = colors();
            });
        }
        document.getElementById('gridContainer').appendChild(row);
    }
}