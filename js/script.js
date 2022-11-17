const DEFAULT_COLOR = '#262626';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'colorMode';

let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let mode = DEFAULT_MODE;

const container = document.getElementById('grid');
const userColor = document.getElementById('chooseColor');
const userMode = document.getElementById('selectMode');

userMode.addEventListener('change', () => {
    setMode(userMode.value);
})

userColor.addEventListener('change', () => {
    setColor(userColor.value);
})

function setColor(userColor) {
    color = userColor;
}

function setMode(userMode){
    mode = userMode;
}

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