// select the container for the grid
const container = document.querySelector('#div-container');

// function to create the grid
function createGrid(n){
    for (let i = 0; i < n*n; i++){
        const div = document.createElement('div');
        div.classList.add('box')
        container.appendChild(div)
    }
    container.setAttribute('style', `grid: repeat(${n}, auto) / repeat(${n}, auto)`);
}

createGrid(16);