// Default grid size:

const container = document.getElementById("flex-container");
let gridSize = 20;
document.documentElement.style.setProperty('--divs-per-row', gridSize); 


// Prompt for grids new size

const btn = document.querySelector(".btn")

btn.addEventListener("click", function (e) {
    removeDivs();
    gridSize = prompt("New grid Height & Width (max 100)");
    if (gridSize > 100) {
        gridSize = 100;
    }
    else if (gridSize <1) {
        gridSize = 1;
    }
    console.log(gridSize)
    document.documentElement.style.setProperty('--divs-per-row', gridSize); 
    createDivs(gridSize,gridSize);
  });


//this area creates the grid:

function createDivs(x, y) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement("div");
            container.appendChild(div);
        };
    };
}

function removeDivs() {
    container.innerHTML = '';
};

addEventListener("load", () => {createDivs(gridSize, gridSize)});


// this area creates the hovering effect:

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = randomColor; //select black if defaulting back to black
    let opacity = parseFloat(e.target.style.opacity) || 0.1;
    opacity += 0.1;
    e.target.style.opacity = opacity;
})});
