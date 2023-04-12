const body = document.querySelector('body');
const sketchContainer = document.getElementById("sketch-container");

/*This function creates the rows of squares for the grid.*/
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

/*Here the dimensions of the grid are determined based on the "grid size" button clicked. The default size is 8x8.*/
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

/*Here the background colour of the squares is determined based on the "colour" button clicked. The square's default colour is white, but by default they change to black when hovered over.*/
let colour = "black";


function hovering(){
    const cButtons = document.querySelectorAll("#c-buttons button");
    cButtons.forEach((cButton) => {
    cButton.addEventListener("click", () => {
        colour = cButton.id;
        })
    })
    const hovers = document.querySelectorAll(".square");
    hovers.forEach((hover) => {
        hover.addEventListener("mouseover", () => {
            hover.style.backgroundColor = colour;
            if (colour == "#c6973b"){
                hover.style.borderColor = "#fffdf3";
            } else {
                hover.style.borderColor = "#c6973b";
            }
        })
    })
}
hovering();

/*The function below removes all child nodes of any parent element. This will come in handy below, for eliminating the old grid whenever the grid needs to be resized.*/
function removeAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

/*Here the old grid is removed, and a new, resized grid is created, whenever a "grid size" button is pressed.*/
const sButtons = document.querySelectorAll("#s-buttons button")
sButtons.forEach((sButton) => {
    sButton.addEventListener("click", () => {
        removeAllChildNodes(sketchContainer);
        numGridSquares(sButton.id);
        sketchGrid(gridDimensions);
        hovering();
    })
})


