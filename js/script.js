const DEFAULT_COLOR = '#262626';
const DEFAULT_SIZE = 16;

let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;

const container = document.getElementById('grid');
const userColor = document.getElementById('chooseColor');

userColor.addEventListener('change', () => {
    setColor(userColor.value);
})

function setColor(userColor){
    color = userColor;
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
    e.target.style.backgroundColor = color;
}

window.onload = () => {
    setGrid();
}