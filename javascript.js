let INITIAL_ROWS = 16, INITIAL_COLUMNS = 16
let BORDER_SETTINGS = "2px black solid"


const container = document.querySelector(".container")

function createGrid(rows, cols){
    //Ratio of size for the individual squares
    let sizeRatio = 100.0/rows
    for(let curSquare = 0; curSquare < rows*cols; curSquare ++){
        let square = document.createElement("div")
        square.className = "square"
        square.style.width = `${sizeRatio}%`
        //Settings to prevent the borders from extending
        if (curSquare/cols < 1){
            square.style.borderTop = BORDER_SETTINGS
        }
        if (curSquare%cols === 0){
            square.style.borderLeft = BORDER_SETTINGS
        }
        container.appendChild(square)
    }
}

function getRandomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

container.addEventListener('mouseover', function(event){
    console.log("Hey there")
    if (event.target.classList.contains("square")){
        event.target.style.backgroundColor = getRandomColor()
    }
})

createGrid(INITIAL_ROWS, INITIAL_COLUMNS)