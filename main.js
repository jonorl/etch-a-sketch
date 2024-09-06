//this first area creates the 16x16 div grid:

function createDivs() {
    const container = document.getElementById("flex-container");
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            container.appendChild(div);
        }
    }
}
addEventListener("load", () => {createDivs()});

//this area creates the hovering effect:

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
})});
