const body = document.querySelector('body');
const sketchContainer = document.getElementById("sketch-container");

function sketchGrid(dimensions){
    for (let i=0; i<dimensions; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j=0; j<dimensions; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        sketchContainer.appendChild(row);
    }   
}

let gridDimensions = 8;

function numGridSquares(gInput){
    if(gInput === "small"){
        return gridDimensions = 32;
    } else if (gInput === "medium"){
        return gridDimensions = 16;
    } else if (gInput === "large"){
        return gridDimensions = 8;
    }
}


sketchGrid(gridDimensions);

function hovering(){
    const hovers = document.querySelectorAll(".square")
    hovers.forEach((hover) => {
        hover.addEventListener("mouseover", () => {
            hover.style.backgroundColor = "black";
        })
    })
}
hovering();


function removeAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const sButtons = document.querySelectorAll("#s-buttons button")
sButtons.forEach((sButton) => {
    sButton.addEventListener("click", () => {
        removeAllChildNodes(sketchContainer);
        numGridSquares(sButton.id);
        sketchGrid(gridDimensions);
        hovering();
    })
})


