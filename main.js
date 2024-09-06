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

// createDivs(gridSize, gridSize)


addEventListener("load", () => {createDivs(gridSize, gridSize)});


// this area creates the hovering effect:

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
})});
