const container = document.getElementById('grid');
container.style.gridTemplateColumns = 'repeat(16,1fr)'
container.style.gridTemplateRows = 'repeat(16,1fr)'

for (let i = 0; i < 16*16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    container.appendChild(gridItem);
}

const gridElements = document.querySelectorAll('.grid-item');

gridElements.forEach(element => {
    element.addEventListener('mouseover',() =>{
        element.setAttribute('style','background-color: black;border-color: white;');
    })
})