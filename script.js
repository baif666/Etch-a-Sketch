const container = document.querySelector('.container');
const newGridButton = document.querySelector('.newGridButton');

function createGrid(size) {
    container.innerHTML = '';

    const totalPixels = 751;
    container.style.width = `${totalPixels}px`;
    container.style.height = `${totalPixels}px`;
    // Ceil totalPixels / size to 2 decimal places
    const squareSize = Math.floor((totalPixels / size)*100) / 100;  

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        })
    
        square.addEventListener('mouseout', () => {
            if (!isMouseDown) {
                setTimeout(() => {
                    square.classList.remove('hovered');
                }, 200);
            } else {
                square.classList.add('fixed');
            }
        });
    
        container.appendChild(square)
    }
}

let isMouseDown = false;

document.body.addEventListener('mousedown', () => {
    isMouseDown = true;
})
document.body.addEventListener('mouseup', () => {
    isMouseDown = false
})

newGridButton.addEventListener('click', () => {
    const input = prompt('Enter the number of squares per side (max 100):');
    const size = parseInt(input);

    if (!isNaN(size) && size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert('Please enter a valid number between 1 and 100.')
    }
});

createGrid(16);