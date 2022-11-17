const DEFAULT_COLOR = '#262626';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'colorMode';
// default value's applied when page is loaded

let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let mode = DEFAULT_MODE;

const container = document.getElementById('grid');
const userColor = document.getElementById('chooseColor');
const userMode = document.getElementById('selectMode');
const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', () => {
    container.innerHTML = ''; // clear grid 
    setGrid();
})

userMode.addEventListener('change', () => {
    mode = userMode.value; // set color modes 
})

userColor.addEventListener('change', () => {
    color = userColor.value; // change draw color 
})

// create grid elements and add listeners
function setGrid() {
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', changeColor)
        container.appendChild(gridItem);
    }
}

// first check the mode and then change the color of grid elements when mouse is passed through it 
const changeColor = (e) => {
    if (mode === 'rainbowMode') {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    } else {
        e.target.style.backgroundColor = color;
    }
}

window.onload = () => {
    setGrid();
}