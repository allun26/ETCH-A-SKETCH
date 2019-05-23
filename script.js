// queryselectors
const container = document.querySelector('#div-container');
const boxes = document.querySelectorAll('#div-container');
const buttons = document.querySelectorAll('#buttons')

// variable to select color mode, 1 = white, 2 = random
let colorMode = 2;

//variable for the grid size, 16 is default
let gridSize = 16;

//function to reset the grid

function resetGrid(){
    let gridBox = document.querySelectorAll(".box");
    gridBox.forEach((div) => {
        div.parentNode.removeChild(div);
    });
}

// function to create the grid
function createGrid(n){
    for (let i = 0; i < n*n; i++){
        const div = document.createElement('div');
        div.classList.add('box')
        container.appendChild(div)
    }
    container.setAttribute('style', `grid: repeat(${n}, auto) / repeat(${n}, auto)`);
}

// function to select a random color
function randomColor () {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`
}

//make the color change when hovering over the boxes
boxes.forEach((box) => {
  box.addEventListener('mouseover', (e) => {
      if  (colorMode === 1){
        e.target.setAttribute('style', `background: white;`)
      } else if  (colorMode === 2){
        e.target.setAttribute('style', `background-color: ${randomColor()};`);   
      } 
    });
});

// eventlisteners for the buttons to change color and create new grid
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'white'){
            colorMode = 1;
        } else if (e.target.id === 'random'){
            colorMode = 2;
        } else if (e.target.id === 'newGrid') {
            gridSize = prompt("Choose a grid size", "16")
            resetGrid();
            createGrid(gridSize);
        }
    })
})

createGrid(gridSize);