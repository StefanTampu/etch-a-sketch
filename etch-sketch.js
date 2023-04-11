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